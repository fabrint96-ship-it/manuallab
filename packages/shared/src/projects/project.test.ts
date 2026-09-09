import { describe, expect, expectTypeOf, it } from 'vitest';
import {
  projectSchema,
  projectStatusSchema,
  createProjectInputSchema,
  updateProjectInputSchema,
  type Project,
  type ProjectStatus,
  type CreateProjectInput,
  type UpdateProjectInput,
} from '../index.js';

const project: Project = {
  id: 'project-1',
  name: 'Mainframe Operations',
  slug: 'mainframe-operations',
  status: 'draft',
  createdAt: '2026-09-09T10:00:00Z',
  updatedAt: '2026-09-09T12:00:00+02:00',
};
const input: CreateProjectInput = { name: project.name, slug: project.slug };

describe('Project public contracts', () => {
  it('validates canonical data and the status union', () => {
    expect(projectSchema.parse(project)).toEqual(project);
    expectTypeOf<ProjectStatus>().toEqualTypeOf<
      'draft' | 'active' | 'archived'
    >();
  });

  it.each(['draft', 'active', 'archived'] as const)(
    'supports status %s',
    (status) => {
      expect(projectStatusSchema.parse(status)).toBe(status);
      expect(projectSchema.parse({ ...project, status }).status).toBe(status);
      expect(createProjectInputSchema.parse({ ...input, status }).status).toBe(
        status,
      );
      expect(updateProjectInputSchema.parse({ status }).status).toBe(status);
    },
  );

  it.each([
    { name: '' },
    { name: '   ' },
    { name: '\t\n' },
    { name: null },
    { slug: '' },
    { slug: ' ' },
    { slug: 'Project' },
    { slug: 'two words' },
    { slug: 'under_score' },
    { slug: '-start' },
    { slug: 'end-' },
    { slug: 'two--hyphens' },
    { slug: '../path' },
    { slug: 'café' },
    { slug: ' project' },
    { slug: 'project\n' },
    { slug: null },
    { status: '' },
    { status: 'published' },
    { status: 'Active' },
    { status: null },
    { description: null },
    { description: 42 },
  ])('rejects invalid domain fields %j across contracts', (fields) => {
    expect(projectSchema.safeParse({ ...project, ...fields }).success).toBe(
      false,
    );
    expect(
      createProjectInputSchema.safeParse({ ...input, ...fields }).success,
    ).toBe(false);
    expect(updateProjectInputSchema.safeParse(fields).success).toBe(false);
  });

  it.each(['project', 'project-123', 'a', '123'])(
    'accepts normalized slug %s',
    (slug) => {
      expect(projectSchema.parse({ ...project, slug }).slug).toBe(slug);
      expect(createProjectInputSchema.parse({ ...input, slug }).slug).toBe(
        slug,
      );
      expect(updateProjectInputSchema.parse({ slug }).slug).toBe(slug);
    },
  );

  it('trims valid names in every contract', () => {
    const name = ' Project ';
    expect(projectSchema.parse({ ...project, name }).name).toBe('Project');
    expect(createProjectInputSchema.parse({ ...input, name }).name).toBe(
      'Project',
    );
    expect(updateProjectInputSchema.parse({ name }).name).toBe('Project');
  });

  it.each(['id', 'name', 'slug', 'status', 'createdAt', 'updatedAt'] as const)(
    'requires canonical %s',
    (field) => {
      const data: Partial<Project> = { ...project };
      delete data[field];
      expect(projectSchema.safeParse(data).success).toBe(false);
    },
  );

  it('rejects empty IDs and invalid timestamps', () => {
    expect(projectSchema.safeParse({ ...project, id: ' ' }).success).toBe(
      false,
    );
    for (const field of ['createdAt', 'updatedAt']) {
      for (const value of [
        'invalid',
        '2026-02-30T10:00:00Z',
        '2026-09-09T10:00:00',
      ]) {
        expect(
          projectSchema.safeParse({ ...project, [field]: value }).success,
        ).toBe(false);
      }
    }
  });

  it.each(['', 'A guide'])('accepts optional description %j', (description) => {
    expect(projectSchema.parse({ ...project, description }).description).toBe(
      description,
    );
    expect(
      createProjectInputSchema.parse({ ...input, description }).description,
    ).toBe(description);
    expect(updateProjectInputSchema.parse({ description }).description).toBe(
      description,
    );
  });
});

describe('Project inputs', () => {
  it('creates with only name and slug without generating defaults or managed fields', () => {
    expect(createProjectInputSchema.parse(input)).toEqual(input);
  });

  it.each([{}, { name: 'Project' }, { slug: 'project' }])(
    'requires creation name and slug: %j',
    (data) => {
      expect(createProjectInputSchema.safeParse(data).success).toBe(false);
    },
  );

  it('accepts partial updates and empty no-ops without inserting fields', () => {
    const updates: UpdateProjectInput[] = [
      {},
      { name: 'Renamed' },
      { slug: 'new-slug' },
      { status: 'archived' },
      { description: '' },
    ];
    for (const update of updates) {
      expect(updateProjectInputSchema.parse(update)).toEqual(update);
    }
  });

  it.each(['id', 'createdAt', 'updatedAt', 'unknown'])(
    'rejects managed or unknown input field %s',
    (field) => {
      expect(
        createProjectInputSchema.safeParse({ ...input, [field]: 'value' })
          .success,
      ).toBe(false);
      expect(
        updateProjectInputSchema.safeParse({ [field]: 'value' }).success,
      ).toBe(false);
    },
  );
});
