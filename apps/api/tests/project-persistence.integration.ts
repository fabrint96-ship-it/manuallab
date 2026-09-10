import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { setTimeout } from 'node:timers/promises';
import { createClient } from '@supabase/supabase-js';
import request from 'supertest';
import { projectSchema } from '@manuallab/shared';
import { createApp } from '../src/app.js';
import { type ProjectDatabase } from '../src/projects/project-database.js';
import { SupabaseProjectRepository } from '../src/projects/supabase-project-repository.js';
import { ProjectService } from '../src/projects/project-service.js';
import {
  ProjectNotFoundError,
  ProjectSlugConflictError,
} from '../src/projects/project-errors.js';

// Opt-in runner: creates its own containers and never reads application credentials.
const suffix = randomUUID();
const network = `manuallab-pm02-${suffix}`;
const database = `${network}-db`;
const rest = `${network}-rest`;
let networkCreated = false;
let databaseCreated = false;
let restCreated = false;

function docker(args: string[], input?: string): string {
  const result = spawnSync('docker', args, {
    encoding: 'utf8',
    ...(input === undefined ? {} : { input }),
  });
  if (result.error) throw result.error;
  if (result.status !== 0)
    throw new Error(`Docker command failed: ${result.stderr}`);
  return result.stdout.trim();
}

async function waitUntil(ready: () => Promise<boolean>): Promise<void> {
  for (let attempt = 0; attempt < 120; attempt++) {
    if (await ready()) return;
    await setTimeout(500);
  }
  throw new Error('Disposable database readiness timed out');
}

try {
  docker(['network', 'create', network]);
  networkCreated = true;
  docker([
    'run',
    '--detach',
    '--name',
    database,
    '--network',
    network,
    '--env',
    'POSTGRES_PASSWORD=pm02-test-only',
    'public.ecr.aws/supabase/postgres:17.6.1.155',
  ]);
  databaseCreated = true;
  await waitUntil(async () => {
    const result = spawnSync(
      'docker',
      ['exec', database, 'pg_isready', '-U', 'postgres'],
      { stdio: 'ignore' },
    );
    return result.status === 0;
  });
  const migration = readFileSync(
    new URL(
      '../../../supabase/migrations/20260909105953_create_projects.sql',
      import.meta.url,
    ),
    'utf8',
  );
  docker(
    ['exec', '-i', database, 'psql', '-U', 'postgres', '-v', 'ON_ERROR_STOP=1'],
    migration,
  );

  // The privileged anonymous role exists only in this disposable test transport.
  docker([
    'run',
    '--detach',
    '--name',
    rest,
    '--network',
    network,
    '--publish',
    '127.0.0.1::3000',
    '--env',
    `PGRST_DB_URI=postgres://postgres:pm02-test-only@${database}:5432/postgres`,
    '--env',
    'PGRST_DB_SCHEMAS=public',
    '--env',
    'PGRST_DB_ANON_ROLE=postgres',
    'public.ecr.aws/supabase/postgrest:v14.15',
  ]);
  restCreated = true;
  const address = docker(['port', rest, '3000/tcp']);
  assert.match(address, /^127\.0\.0\.1:\d+$/);
  const baseUrl = `http://${address}`;
  await waitUntil(async () => {
    try {
      return (await fetch(`${baseUrl}/projects`)).ok;
    } catch {
      return false;
    }
  });

  const client = createClient<ProjectDatabase>(baseUrl, 'disposable-test-key', {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      // Standalone PostgREST lacks the Supabase gateway's /rest/v1 prefix.
      fetch: (input, init) => {
        const url = new URL(String(input));
        assert.equal(url.origin, baseUrl);
        url.pathname = url.pathname.replace(/^\/rest\/v1/, '');
        const headers = new Headers(init?.headers);
        headers.delete('authorization');
        headers.delete('apikey');
        return fetch(url, { ...init, headers });
      },
    },
  });
  const repository = new SupabaseProjectRepository(client);
  let time = new Date('2026-09-10T10:00:00Z');
  const service = new ProjectService(repository, { clock: () => time });

  const first = await service.createProject({ name: ' First ', slug: 'first' });
  assert.equal(first.name, 'First');
  assert.equal(first.status, 'draft');
  assert.deepEqual(projectSchema.parse(first), first);
  assert.deepEqual(await service.getProjectById(first.id), first);
  assert.deepEqual(await service.getProjectBySlug('first'), first);
  assert.equal(await service.getProjectById(randomUUID()), null);
  assert.equal(await service.getProjectBySlug('missing'), null);

  time = new Date('2026-09-10T11:00:00Z');
  const second = await service.createProject({
    name: 'Second',
    slug: 'second',
    status: 'active',
  });
  const tied = await service.createProject({ name: 'Tied', slug: 'tied' });
  const ordered = await service.listProjects();
  assert.deepEqual(
    ordered.map((p) => p.id),
    [...[second.id, tied.id].sort(), first.id],
  );
  await assert.rejects(
    service.createProject({ name: 'Duplicate', slug: 'first' }),
    ProjectSlugConflictError,
  );
  await assert.rejects(
    repository.create({ ...first, id: randomUUID() }),
    ProjectSlugConflictError,
  );
  await assert.rejects(
    repository.update({ ...second, slug: first.slug }),
    ProjectSlugConflictError,
  );

  const updated = await service.updateProject(first.id, {
    name: 'Changed',
    slug: 'changed',
    description: 'Added description',
  });
  assert.equal(updated.id, first.id);
  assert.equal(updated.createdAt, first.createdAt);
  assert.notEqual(updated.updatedAt, first.updatedAt);
  assert.equal(updated.description, 'Added description');
  assert.equal(await service.getProjectBySlug('first'), null);
  assert.deepEqual(await service.getProjectBySlug('changed'), updated);
  await assert.rejects(
    service.updateProject(first.id, { slug: second.slug }),
    ProjectSlugConflictError,
  );

  const cleared = await service.updateProject(first.id, {
    description: undefined,
  });
  assert.equal(Object.hasOwn(cleared, 'description'), false);
  time = new Date('2026-09-10T12:00:00Z');
  const archived = await service.archiveProject(first.id);
  assert.deepEqual(archived, {
    ...cleared,
    status: 'archived',
    updatedAt: archived.updatedAt,
  });
  assert.notEqual(archived.updatedAt, cleared.updatedAt);
  assert.deepEqual(await service.getProjectById(first.id), archived);
  await assert.rejects(
    service.archiveProject(randomUUID()),
    ProjectNotFoundError,
  );
  await assert.rejects(
    repository.update({ ...first, id: randomUUID() }),
    ProjectNotFoundError,
  );

  const race = await Promise.allSettled([
    service.createProject({ name: 'Race one', slug: 'race' }),
    service.createProject({ name: 'Race two', slug: 'race' }),
  ]);
  assert.equal(race.filter((r) => r.status === 'fulfilled').length, 1);
  const rejected = race.find((r) => r.status === 'rejected');
  assert.ok(
    rejected?.status === 'rejected' &&
      rejected.reason instanceof ProjectSlugConflictError,
  );

  const app = createApp({ projectService: service });
  time = new Date('2026-09-10T13:00:00Z');
  const createdResponse = await request(app).post('/api/projects').send({
    name: 'HTTP project',
    slug: 'http-project',
    description: 'Remove through HTTP',
  });
  assert.equal(createdResponse.status, 201);
  const httpProject = projectSchema.parse(createdResponse.body.data);

  assert.deepEqual(
    (await request(app).get(`/api/projects/${httpProject.id}`)).body.data,
    httpProject,
  );
  assert.deepEqual(
    (await request(app).get('/api/projects/slug/http-project')).body.data,
    httpProject,
  );
  assert.ok(
    (await request(app).get('/api/projects')).body.data.some(
      (project: { id: string }) => project.id === httpProject.id,
    ),
  );

  time = new Date('2026-09-10T14:00:00Z');
  const updatedResponse = await request(app)
    .patch(`/api/projects/${httpProject.id}`)
    .send({ slug: 'http-project-updated', description: null });
  assert.equal(updatedResponse.status, 200);
  assert.equal(updatedResponse.body.data.slug, 'http-project-updated');
  assert.equal(Object.hasOwn(updatedResponse.body.data, 'description'), false);

  time = new Date('2026-09-10T15:00:00Z');
  const archivedResponse = await request(app).post(
    `/api/projects/${httpProject.id}/archive`,
  );
  assert.equal(archivedResponse.status, 200);
  assert.equal(archivedResponse.body.data.status, 'archived');
  assert.equal(
    (await request(app).get('/api/projects/slug/http-project-updated')).status,
    200,
  );

  console.log(
    'PASS: service and HTTP Project flows through real Supabase SDK/PostgREST/PostgreSQL; create, lookups, deterministic list, update, archive, null description, missing records, uniqueness and concurrent creation.',
  );
} finally {
  // Only randomly named resources created by this run can be removed.
  if (restCreated) docker(['rm', '--force', '--volumes', rest]);
  if (databaseCreated) docker(['rm', '--force', '--volumes', database]);
  if (networkCreated) docker(['network', 'rm', network]);
}
