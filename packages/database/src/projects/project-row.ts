import { projectSchema, type Project } from '@manuallab/shared';

/** Persisted UUIDs use the standard hyphenated PostgreSQL output form. */
export const projectRowSchema = projectSchema
  .omit({ createdAt: true, updatedAt: true })
  .extend({
    id: projectSchema.shape.id.regex(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
      'Project persistence requires a UUID',
    ),
    description: projectSchema.shape.description.unwrap().nullable(),
    created_at: projectSchema.shape.createdAt,
    updated_at: projectSchema.shape.updatedAt,
  });

export type ProjectRow = ReturnType<typeof projectRowSchema.parse>;

/** Validate untrusted row data and translate persistence names and nullability. */
export function projectRowToDomain(value: unknown): Project {
  const row = projectRowSchema.parse(value);
  return projectSchema.parse({
    id: row.id,
    name: row.name,
    slug: row.slug,
    ...(row.description === null ? {} : { description: row.description }),
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  });
}

/** Validate the canonical contract and persistence constraints without generating values. */
export function projectToRow(value: Project): ProjectRow {
  const project = projectSchema.parse(value);
  return projectRowSchema.parse({
    id: project.id,
    name: project.name,
    slug: project.slug,
    description: project.description ?? null,
    status: project.status,
    created_at: project.createdAt,
    updated_at: project.updatedAt,
  });
}
