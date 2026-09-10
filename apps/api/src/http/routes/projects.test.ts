import request from 'supertest';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { type Project } from '@manuallab/shared';
import { createApp } from '../../app.js';
import { type ProjectRepository } from '../../projects/project-repository.js';
import { ProjectService } from '../../projects/project-service.js';

const createdAt = '2026-09-10T10:00:00.000Z';
const updatedAt = '2026-09-10T11:00:00.000Z';

class MemoryProjectRepository implements ProjectRepository {
  readonly projects = new Map<string, Project>();
  failure: Error | undefined;

  async create(project: Project): Promise<Project> {
    this.failIfConfigured();
    this.projects.set(project.id, project);
    return project;
  }

  async findById(id: string): Promise<Project | null> {
    this.failIfConfigured();
    return this.projects.get(id) ?? null;
  }

  async findBySlug(slug: string): Promise<Project | null> {
    this.failIfConfigured();
    return (
      [...this.projects.values()].find((project) => project.slug === slug) ??
      null
    );
  }

  async findAll(): Promise<Project[]> {
    this.failIfConfigured();
    return [...this.projects.values()];
  }

  async update(project: Project): Promise<Project> {
    this.failIfConfigured();
    this.projects.set(project.id, project);
    return project;
  }

  private failIfConfigured(): void {
    if (this.failure) throw this.failure;
  }
}

function setup(initial: Project[] = []) {
  const repository = new MemoryProjectRepository();
  for (const project of initial) repository.projects.set(project.id, project);
  let now = createdAt;
  let sequence = 0;
  const service = new ProjectService(repository, {
    clock: () => new Date(now),
    idGenerator: () =>
      `00000000-0000-4000-8000-${String(++sequence).padStart(12, '0')}`,
  });
  return {
    app: createApp({ projectService: service }),
    repository,
    advanceClock: () => {
      now = updatedAt;
    },
  };
}

async function createProject(
  app: ReturnType<typeof createApp>,
  slug = 'project',
) {
  return request(app).post('/api/projects').send({ name: 'Project', slug });
}

describe('Project HTTP API', () => {
  afterEach(() => vi.restoreAllMocks());

  it('creates a canonical draft project', async () => {
    const { app } = setup();
    const response = await createProject(app);
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      data: {
        id: '00000000-0000-4000-8000-000000000001',
        name: 'Project',
        slug: 'project',
        status: 'draft',
        createdAt,
        updatedAt: createdAt,
      },
    });
  });

  it.each([
    { name: '', slug: 'project' },
    { name: 'Project', slug: 'Invalid Slug' },
    { name: 'Project', slug: 'project', status: 'published' },
    { name: 'Project', slug: 'project', id: 'managed' },
    { name: 'Project', slug: 'project', createdAt },
  ])('rejects invalid creation input %j', async (body) => {
    const response = await request(setup().app)
      .post('/api/projects')
      .send(body);
    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
    expect(response.body.error.details).toEqual(expect.any(Array));
  });

  it('returns 409 without exposing conflict internals', async () => {
    const { app } = setup();
    await createProject(app);
    const response = await createProject(app);
    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      error: {
        code: 'PROJECT_SLUG_CONFLICT',
        message: 'Project slug already exists.',
      },
    });
  });

  it('lists projects in the order supplied by the service', async () => {
    const { app } = setup();
    const first = (await createProject(app, 'first')).body.data;
    const second = (await createProject(app, 'second')).body.data;
    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ data: [first, second] });
  });

  it('gets by ID and returns 404 when missing', async () => {
    const { app } = setup();
    const project = (await createProject(app)).body.data;
    expect(
      (await request(app).get(`/api/projects/${project.id}`)).body,
    ).toEqual({ data: project });
    const missing = await request(app).get(
      '/api/projects/00000000-0000-4000-8000-999999999999',
    );
    expect(missing.status).toBe(404);
    expect(missing.body.error.code).toBe('PROJECT_NOT_FOUND');
  });

  it('gets by slug without colliding with the ID route', async () => {
    const { app } = setup();
    const project = (await createProject(app, 'slug-route')).body.data;
    const found = await request(app).get('/api/projects/slug/slug-route');
    expect(found.status).toBe(200);
    expect(found.body).toEqual({ data: project });
    const missing = await request(app).get('/api/projects/slug/missing');
    expect(missing.status).toBe(404);
  });

  it('partially updates mutable fields and clears description with JSON null', async () => {
    const { app, advanceClock } = setup();
    const project = (
      await request(app).post('/api/projects').send({
        name: 'Project',
        slug: 'project',
        description: 'Remove me',
      })
    ).body.data;
    advanceClock();
    const updated = await request(app)
      .patch(`/api/projects/${project.id}`)
      .send({ name: 'Updated', description: null });
    expect(updated.status).toBe(200);
    expect(updated.body.data).toEqual({
      ...project,
      name: 'Updated',
      updatedAt,
      description: undefined,
    });
    expect(updated.body.data).not.toHaveProperty('description');
  });

  it.each([
    { name: '' },
    { slug: 'Invalid Slug' },
    { status: 'unsupported' },
    { id: 'managed' },
    { createdAt },
    { updatedAt },
  ])('rejects invalid update input %j', async (body) => {
    const { app } = setup();
    const project = (await createProject(app)).body.data;
    const response = await request(app)
      .patch(`/api/projects/${project.id}`)
      .send(body);
    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe('VALIDATION_ERROR');
  });

  it('maps update conflicts and missing projects', async () => {
    const { app } = setup();
    const first = (await createProject(app, 'first')).body.data;
    await createProject(app, 'second');
    const conflict = await request(app)
      .patch(`/api/projects/${first.id}`)
      .send({ slug: 'second' });
    expect(conflict.status).toBe(409);
    const missing = await request(app)
      .patch('/api/projects/00000000-0000-4000-8000-999999999999')
      .send({ name: 'Missing' });
    expect(missing.status).toBe(404);
  });

  it('archives without physical deletion and maps missing projects', async () => {
    const { app, advanceClock } = setup();
    const project = (await createProject(app)).body.data;
    advanceClock();
    const archived = await request(app).post(
      `/api/projects/${project.id}/archive`,
    );
    expect(archived.status).toBe(200);
    expect(archived.body.data).toEqual({
      ...project,
      status: 'archived',
      updatedAt,
    });
    expect((await request(app).get(`/api/projects/${project.id}`)).status).toBe(
      200,
    );
    const missing = await request(app).post(
      '/api/projects/00000000-0000-4000-8000-999999999999/archive',
    );
    expect(missing.status).toBe(404);
  });

  it('uses the existing 500 handler without leaking persistence details', async () => {
    const { app, repository } = setup();
    repository.failure = new Error('projects_slug_unique DATABASE_URL=secret');
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred.',
      },
    });
    expect(JSON.stringify(response.body)).not.toContain('projects_slug_unique');
    expect(JSON.stringify(response.body)).not.toContain('secret');
  });

  it('preserves existing API and health routes', async () => {
    const { app } = setup();
    expect((await request(app).get('/api')).status).toBe(200);
    expect((await request(app).get('/health')).status).toBe(200);
  });

  it('does not expose a physical delete endpoint', async () => {
    const response = await request(setup().app).delete('/api/projects/id');
    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe('ROUTE_NOT_FOUND');
  });
});
