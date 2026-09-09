import { createClient } from '@supabase/supabase-js';
import { describe, expect, it, vi } from 'vitest';
import { projectRowToDomain, type ProjectRow } from '@manuallab/database';
import { type ProjectDatabase } from './project-database.js';
import { SupabaseProjectRepository } from './supabase-project-repository.js';
import {
  ProjectNotFoundError,
  ProjectSlugConflictError,
} from './project-errors.js';

const row: ProjectRow = {
  id: '01234567-89ab-cdef-0123-456789abcdef',
  name: 'Project',
  slug: 'project',
  description: null,
  status: 'draft',
  created_at: '2026-09-09T10:00:00Z',
  updated_at: '2026-09-09T10:00:00Z',
};
const project = projectRowToDomain(row);

function setup(body: unknown, status = 200) {
  const fetch = vi.fn<typeof globalThis.fetch>().mockResolvedValue(
    new Response(JSON.stringify(body), {
      status,
      headers: { 'Content-Type': 'application/json' },
    }),
  );
  const client = createClient<ProjectDatabase>(
    'http://127.0.0.1:54321',
    'test-key',
    {
      global: { fetch },
      auth: { persistSession: false, autoRefreshToken: false },
    },
  );
  return { repository: new SupabaseProjectRepository(client), fetch };
}

describe('SupabaseProjectRepository', () => {
  it('inserts mapped rows and returns the mapped domain', async () => {
    const { repository, fetch } = setup(row, 201);
    expect(await repository.create(project)).toEqual(project);
    const [url, options] = fetch.mock.calls[0]!;
    expect(String(url)).toContain('/rest/v1/projects');
    expect(options?.method).toBe('POST');
    expect(JSON.parse(String(options?.body))).toEqual(row);
  });

  it.each(['id', 'slug'] as const)(
    'finds by %s with canonical mapping',
    async (field) => {
      const { repository, fetch } = setup([row]);
      const result =
        field === 'id'
          ? await repository.findById(row.id)
          : await repository.findBySlug(row.slug);
      expect(result).toEqual(project);
      const url = new URL(String(fetch.mock.calls[0]![0]));
      expect(url.searchParams.get(field)).toBe(`eq.${row[field]}`);
    },
  );

  it.each(['id', 'slug'] as const)(
    'returns null for missing %s',
    async (field) => {
      const { repository } = setup([]);
      expect(
        field === 'id'
          ? await repository.findById(row.id)
          : await repository.findBySlug(row.slug),
      ).toBeNull();
    },
  );

  it('lists mapped rows with deterministic server ordering', async () => {
    const { repository, fetch } = setup([row]);
    expect(await repository.findAll()).toEqual([project]);
    const url = new URL(String(fetch.mock.calls[0]![0]));
    expect(url.searchParams.get('order')).toBe('created_at.desc,id.asc');
  });

  it('returns an empty list', async () => {
    expect(await setup([]).repository.findAll()).toEqual([]);
  });

  it('updates mutable columns only, filters by ID and maps returned data', async () => {
    const updatedRow = {
      ...row,
      description: 'Updated',
      updated_at: '2026-09-10T10:00:00Z',
    };
    const { repository, fetch } = setup([updatedRow]);
    const updated = projectRowToDomain(updatedRow);
    expect(await repository.update(updated)).toEqual(updated);
    const [url, options] = fetch.mock.calls[0]!;
    expect(new URL(String(url)).searchParams.get('id')).toBe(`eq.${row.id}`);
    expect(options?.method).toBe('PATCH');
    const body = JSON.parse(String(options?.body));
    expect(body).toEqual({
      name: row.name,
      slug: row.slug,
      status: row.status,
      description: 'Updated',
      updated_at: updatedRow.updated_at,
    });
  });

  it('rejects updates after concurrent deletion', async () => {
    await expect(setup([]).repository.update(project)).rejects.toBeInstanceOf(
      ProjectNotFoundError,
    );
  });

  it.each(['create', 'update'] as const)(
    'translates slug races on %s',
    async (method) => {
      const error = {
        code: '23505',
        message:
          'duplicate key value violates unique constraint "projects_slug_unique"',
        details: '',
        hint: '',
      };
      await expect(
        setup(error, 409).repository[method](project),
      ).rejects.toBeInstanceOf(ProjectSlugConflictError);
    },
  );

  it('does not misclassify duplicate primary keys as slug conflicts', async () => {
    const error = {
      code: '23505',
      message: 'duplicate key value violates unique constraint "projects_pkey"',
    };
    await expect(
      setup(error, 409).repository.create(project),
    ).rejects.toMatchObject({
      message: 'Project persistence operation failed',
      cause: error,
    });
  });

  it.each(['create', 'findById', 'findBySlug', 'findAll', 'update'] as const)(
    'propagates %s persistence failure',
    async (method) => {
      const error = { code: 'XX000', message: 'failure' };
      const { repository } = setup(error, 500);
      const operation =
        method === 'create' || method === 'update'
          ? repository[method](project)
          : method === 'findAll'
            ? repository.findAll()
            : repository[method](row.id);
      await expect(operation).rejects.toMatchObject({
        message: 'Project persistence operation failed',
        cause: error,
      });
    },
  );

  it('rejects malformed returned rows', async () => {
    await expect(
      setup([{ ...row, status: 'bad' }]).repository.findAll(),
    ).rejects.toThrow();
  });

  it('validates before issuing writes', async () => {
    const { repository, fetch } = setup(row);
    await expect(
      repository.create({ ...project, id: 'not-uuid' }),
    ).rejects.toThrow();
    expect(fetch).not.toHaveBeenCalled();
  });
});
