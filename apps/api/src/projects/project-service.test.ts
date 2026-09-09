import { describe, expect, it, vi } from 'vitest';
import { projectSchema, type Project } from '@manuallab/shared';
import { ProjectService } from './project-service.js';
import { type ProjectRepository } from './project-repository.js';
import {
  ProjectNotFoundError,
  ProjectSlugConflictError,
} from './project-errors.js';

const original: Project = {
  id: '01234567-89ab-cdef-0123-456789abcdef',
  name: 'Original',
  slug: 'original',
  description: 'Description',
  status: 'active',
  createdAt: '2026-09-09T10:00:00Z',
  updatedAt: '2026-09-09T10:00:00Z',
};
const now = '2026-09-10T12:00:00.000Z';

function setup() {
  const repository = {
    create: vi
      .fn<ProjectRepository['create']>()
      .mockImplementation(async (p) => p),
    findById: vi
      .fn<ProjectRepository['findById']>()
      .mockResolvedValue(original),
    findBySlug: vi
      .fn<ProjectRepository['findBySlug']>()
      .mockResolvedValue(null),
    findAll: vi
      .fn<ProjectRepository['findAll']>()
      .mockResolvedValue([original]),
    update: vi
      .fn<ProjectRepository['update']>()
      .mockImplementation(async (p) => p),
  };
  const clock = vi.fn(() => new Date(now));
  const idGenerator = vi.fn(() => original.id);
  return {
    repository,
    clock,
    idGenerator,
    service: new ProjectService(repository, { clock, idGenerator }),
  };
}

describe('ProjectService', () => {
  it('creates canonical data with generated identity, one timestamp and draft default', async () => {
    const { service, repository, clock, idGenerator } = setup();
    const result = await service.createProject({ name: ' New ', slug: 'new' });
    expect(result).toStrictEqual({
      id: original.id,
      name: 'New',
      slug: 'new',
      status: 'draft',
      createdAt: now,
      updatedAt: now,
    });
    expect(projectSchema.parse(result)).toEqual(result);
    expect(clock).toHaveBeenCalledTimes(1);
    expect(idGenerator).toHaveBeenCalledTimes(1);
    expect(repository.create).toHaveBeenCalledWith(result);
  });

  it('uses a runtime UUID by default while keeping the clock controllable', async () => {
    const { repository } = setup();
    const result = await new ProjectService(repository, {
      clock: () => new Date(now),
    }).createProject({ name: 'New', slug: 'new' });
    expect(result.id).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
    expect(result.createdAt).toBe(now);
  });

  it.each(['draft', 'active', 'archived'])(
    'keeps explicit status %s',
    async (status) => {
      expect(
        (
          await setup().service.createProject({
            name: 'New',
            slug: 'new',
            status,
          })
        ).status,
      ).toBe(status);
    },
  );

  it.each([
    {},
    { name: ' ', slug: 'new' },
    { name: 'New', slug: 'Bad Slug' },
    { name: 'New', slug: 'new', status: 'bad' },
    { name: 'New', slug: 'new', id: original.id },
  ])('rejects invalid creation %j before persistence', async (input) => {
    const { service, repository } = setup();
    await expect(service.createProject(input)).rejects.toThrow();
    expect(repository.create).not.toHaveBeenCalled();
  });

  it('rejects pre-existing slugs before generating values', async () => {
    const { service, repository, clock, idGenerator } = setup();
    repository.findBySlug.mockResolvedValue(original);
    await expect(
      service.createProject({ name: 'Other', slug: original.slug }),
    ).rejects.toBeInstanceOf(ProjectSlugConflictError);
    expect(repository.create).not.toHaveBeenCalled();
    expect(clock).not.toHaveBeenCalled();
    expect(idGenerator).not.toHaveBeenCalled();
  });

  it('propagates conflict from a concurrent insert', async () => {
    const { service, repository } = setup();
    const conflict = new ProjectSlugConflictError('new');
    repository.create.mockRejectedValue(conflict);
    await expect(
      service.createProject({ name: 'New', slug: 'new' }),
    ).rejects.toBe(conflict);
  });

  it('returns projects or null from both lookups', async () => {
    const { service, repository } = setup();
    repository.findBySlug.mockResolvedValueOnce(original);
    expect(await service.getProjectById(original.id)).toEqual(original);
    expect(await service.getProjectBySlug(original.slug)).toEqual(original);
    repository.findById.mockResolvedValue(null);
    expect(await service.getProjectById('missing')).toBeNull();
    expect(await service.getProjectBySlug('missing')).toBeNull();
  });

  it('preserves repository collection order', async () => {
    const { service, repository } = setup();
    const projects = [{ ...original, id: 'new', createdAt: now }, original];
    repository.findAll.mockResolvedValue(projects);
    expect(await service.listProjects()).toEqual(projects);
  });

  it('updates only mutable fields and preserves identity and creation time', async () => {
    const { service, repository } = setup();
    expect(
      await service.updateProject(original.id, {
        name: ' Updated ',
        slug: 'changed',
        description: 'New description',
        status: 'draft',
      }),
    ).toEqual({
      ...original,
      name: 'Updated',
      slug: 'changed',
      description: 'New description',
      status: 'draft',
      updatedAt: now,
    });
    expect(repository.findBySlug).toHaveBeenCalledWith('changed');
    expect(original.updatedAt).toBe('2026-09-09T10:00:00Z');
  });

  it('keeps omitted fields and ignores undefined required fields', async () => {
    const { service, repository } = setup();
    expect(
      await service.updateProject(original.id, {
        name: undefined,
        slug: undefined,
        status: undefined,
      }),
    ).toEqual({ ...original, updatedAt: now });
    expect(repository.findBySlug).not.toHaveBeenCalled();
  });

  it('clears description with explicit undefined and preserves empty text', async () => {
    const { service } = setup();
    expect(
      await service.updateProject(original.id, { description: undefined }),
    ).not.toHaveProperty('description');
    expect(
      (await service.updateProject(original.id, { description: '' }))
        .description,
    ).toBe('');
  });

  it.each([
    { id: 'another' },
    { createdAt: now },
    { updatedAt: now },
    { name: '' },
    { slug: 'Bad Slug' },
    { status: 'bad' },
    { description: null },
  ])('rejects invalid update %j', async (input) => {
    const { service, repository } = setup();
    await expect(service.updateProject(original.id, input)).rejects.toThrow();
    expect(repository.update).not.toHaveBeenCalled();
  });

  it('rejects another project using the requested slug', async () => {
    const { service, repository } = setup();
    repository.findBySlug.mockResolvedValue({
      ...original,
      id: 'other',
      slug: 'changed',
    });
    await expect(
      service.updateProject(original.id, { slug: 'changed' }),
    ).rejects.toBeInstanceOf(ProjectSlugConflictError);
    expect(repository.update).not.toHaveBeenCalled();
  });

  it('allows the unchanged slug without duplicate lookup', async () => {
    const { service, repository } = setup();
    await service.updateProject(original.id, { slug: original.slug });
    expect(repository.findBySlug).not.toHaveBeenCalled();
  });

  it('archives without changing other data', async () => {
    expect(await setup().service.archiveProject(original.id)).toEqual({
      ...original,
      status: 'archived',
      updatedAt: now,
    });
  });

  it.each(['update', 'archive'])(
    'rejects %s of a missing project',
    async (operation) => {
      const { service, repository } = setup();
      repository.findById.mockResolvedValue(null);
      await expect(
        operation === 'update'
          ? service.updateProject(original.id, {})
          : service.archiveProject(original.id),
      ).rejects.toBeInstanceOf(ProjectNotFoundError);
      expect(repository.update).not.toHaveBeenCalled();
    },
  );

  it('propagates persistence failures on updates', async () => {
    const { service, repository } = setup();
    const failure = new Error('offline');
    repository.update.mockRejectedValue(failure);
    await expect(service.archiveProject(original.id)).rejects.toBe(failure);
  });
});
