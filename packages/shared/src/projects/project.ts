import { z } from 'zod';

export const projectStatusSchema = z.enum(['draft', 'active', 'archived']);
export type ProjectStatus = z.infer<typeof projectStatusSchema>;

const projectFields = {
  name: z.string().trim().min(1, 'Project name is required'),
  // Reject non-normalized slugs rather than changing their identity.
  slug: z
    .string()
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      'Use lowercase kebab-case for the slug',
    ),
  description: z.string().optional(),
  status: projectStatusSchema,
};

/** Canonical timestamps are ISO 8601 strings with an explicit timezone. */
export const projectSchema = z.strictObject({
  id: z.string().trim().min(1),
  ...projectFields,
  createdAt: z.iso.datetime({ offset: true }),
  updatedAt: z.iso.datetime({ offset: true }),
});
export type Project = z.infer<typeof projectSchema>;

/** IDs and timestamps are supplied separately. No status default is applied. */
export const createProjectInputSchema = z.strictObject({
  ...projectFields,
  status: projectStatusSchema.optional(),
});
export type CreateProjectInput = z.infer<typeof createProjectInputSchema>;

/** Omitted fields remain unchanged; an empty update is a valid no-op. */
export const updateProjectInputSchema = createProjectInputSchema.partial();
export type UpdateProjectInput = z.infer<typeof updateProjectInputSchema>;
