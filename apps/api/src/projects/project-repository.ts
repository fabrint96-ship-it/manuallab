import { type Project } from '@manuallab/shared';

export interface ProjectRepository {
  create(project: Project): Promise<Project>;
  findById(id: string): Promise<Project | null>;
  findBySlug(slug: string): Promise<Project | null>;
  /** Newest first; equal creation times are ordered by ID ascending. */
  findAll(): Promise<Project[]>;
  /** Rejects missing projects and duplicate slugs, including concurrent conflicts. */
  update(project: Project): Promise<Project>;
}
