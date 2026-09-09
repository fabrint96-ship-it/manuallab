export const MANUALLAB_VERSION = '0.1.0' as const;

export {
  projectSchema,
  projectStatusSchema,
  createProjectInputSchema,
  updateProjectInputSchema,
  type Project,
  type ProjectStatus,
  type CreateProjectInput,
  type UpdateProjectInput,
} from './projects/project.js';
