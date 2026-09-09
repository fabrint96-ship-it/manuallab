import { describe, expect, it } from 'vitest';
import { type Project } from '@manuallab/shared';
import {
  projectRowSchema,
  projectRowToDomain,
  projectToRow,
  type ProjectRow,
} from '../index.js';

const row: ProjectRow = {
  id: '01234567-89ab-cdef-0123-456789abcdef',
  name: 'Project',
  slug: 'project',
  description: null,
  status: 'draft',
  created_at: '2026-09-09T10:00:00Z',
  updated_at: '2026-09-09T12:30:00+02:00',
};
const project: Project = {
  id: row.id,
  name: row.name,
  slug: row.slug,
  status: row.status,
  createdAt: row.created_at,
  updatedAt: row.updated_at,
};

describe('Project persistence mapping', () => {
  it('maps snake_case to camelCase and omits a null description', () => {
    expect(projectRowToDomain(row)).toStrictEqual(project);
    expect(projectRowToDomain(row)).not.toHaveProperty('description');
    expect(projectRowToDomain(row)).not.toHaveProperty('created_at');
  });

  it('maps camelCase to snake_case and uses null for an omitted description', () => {
    expect(projectToRow(project)).toStrictEqual(row);
    expect(projectToRow(project)).not.toHaveProperty('createdAt');
  });

  it.each(['', 'A project description'])(
    'preserves description %j in both directions',
    (description) => {
      expect(projectRowToDomain({ ...row, description })).toStrictEqual({
        ...project,
        description,
      });
      expect(projectToRow({ ...project, description })).toStrictEqual({
        ...row,
        description,
      });
    },
  );

  it.each(['draft', 'active', 'archived'] as const)(
    'round-trips status %s',
    (status) => {
      const statusRow = { ...row, status };
      const statusProject = { ...project, status };
      expect(projectRowToDomain(statusRow)).toStrictEqual(statusProject);
      expect(projectToRow(statusProject)).toStrictEqual(statusRow);
      expect(projectToRow(projectRowToDomain(statusRow))).toStrictEqual(
        statusRow,
      );
      expect(projectRowToDomain(projectToRow(statusProject))).toStrictEqual(
        statusProject,
      );
    },
  );

  it('preserves IDs and timestamp strings exactly without mutating its input', () => {
    expect(projectToRow(Object.freeze(project))).toStrictEqual(row);
    expect(projectRowToDomain(Object.freeze(row))).toStrictEqual(project);
  });

  it.each([
    { id: 'not-a-uuid' },
    { id: '' },
    { name: '' },
    { name: ' \t\n' },
    { slug: '' },
    { slug: 'Not safe' },
    { slug: 'two--hyphens' },
    { status: 'published' },
    { status: 'Active' },
    { status: null },
    { description: undefined },
    { description: 42 },
    { created_at: 'invalid' },
    { updated_at: '2026-02-30T10:00:00Z' },
    { created_at: '2026-09-09T10:00:00' },
    { updated_at: null },
    { createdAt: row.created_at },
    { extra: 'unexpected' },
  ])('rejects invalid persistence data %j', (fields) => {
    const invalid = { ...row, ...fields };
    expect(projectRowSchema.safeParse(invalid).success).toBe(false);
    expect(() => projectRowToDomain(invalid)).toThrow();
  });

  it.each(Object.keys(row) as (keyof ProjectRow)[])(
    'rejects a missing persistence field %s without filling it',
    (field) => {
      const invalid: Partial<ProjectRow> = { ...row };
      delete invalid[field];
      expect(projectRowSchema.safeParse(invalid).success).toBe(false);
      expect(() => projectRowToDomain(invalid)).toThrow();
    },
  );

  it.each([
    'id',
    'name',
    'slug',
    'status',
    'created_at',
    'updated_at',
  ] as const)('rejects null required field %s', (field) => {
    expect(() => projectRowToDomain({ ...row, [field]: null })).toThrow();
  });

  it.each([
    { id: 'domain-id-is-not-a-uuid' },
    { name: ' ' },
    { slug: 'INVALID' },
    { createdAt: 'invalid' },
    { updatedAt: '2026-09-09' },
  ])('validates domain and persistence constraints on writes: %j', (fields) => {
    expect(() => projectToRow({ ...project, ...fields })).toThrow();
  });

  it('rejects missing domain IDs and timestamps rather than generating them', () => {
    for (const field of ['id', 'createdAt', 'updatedAt'] as const) {
      const invalid: Partial<Project> = { ...project };
      delete invalid[field];
      expect(() => projectToRow(invalid as Project)).toThrow();
    }
  });
});
