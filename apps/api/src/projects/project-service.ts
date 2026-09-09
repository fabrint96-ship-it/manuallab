import { randomUUID } from 'node:crypto';
import {
  createProjectInputSchema,
  updateProjectInputSchema,
  projectSchema,
  type Project,
} from '@manuallab/shared';
import { type ProjectRepository } from './project-repository.js';
import {
  ProjectNotFoundError,
  ProjectSlugConflictError,
} from './project-errors.js';

interface ProjectServiceOptions {
  clock?: () => Date;
  idGenerator?: () => string;
}

export class ProjectService {
  private readonly clock: () => Date;
  private readonly idGenerator: () => string;

  constructor(
    private readonly repository: ProjectRepository,
    options: ProjectServiceOptions = {},
  ) {
    this.clock = options.clock ?? (() => new Date());
    this.idGenerator = options.idGenerator ?? randomUUID;
  }

  async createProject(input: unknown): Promise<Project> {
    const data = createProjectInputSchema.parse(input);
    if (await this.repository.findBySlug(data.slug)) {
      throw new ProjectSlugConflictError(data.slug);
    }
    const timestamp = this.clock().toISOString();
    const project = projectSchema.parse({
      ...data,
      id: this.idGenerator(),
      status: data.status ?? 'draft',
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    return this.repository.create(project);
  }

  getProjectById(id: string): Promise<Project | null> {
    return this.repository.findById(id);
  }

  getProjectBySlug(slug: string): Promise<Project | null> {
    return this.repository.findBySlug(slug);
  }

  listProjects(): Promise<Project[]> {
    return this.repository.findAll();
  }

  async updateProject(id: string, input: unknown): Promise<Project> {
    const data = updateProjectInputSchema.parse(input);
    const current = await this.repository.findById(id);
    if (!current) throw new ProjectNotFoundError(id);

    if (data.slug !== undefined && data.slug !== current.slug) {
      const duplicate = await this.repository.findBySlug(data.slug);
      if (duplicate && duplicate.id !== current.id) {
        throw new ProjectSlugConflictError(data.slug);
      }
    }

    // Explicit undefined clears description; omitted fields keep their values.
    const { description: previousDescription, ...rest } = current;
    const description = Object.hasOwn(data, 'description')
      ? data.description
      : previousDescription;
    const project = projectSchema.parse({
      ...rest,
      name: data.name ?? current.name,
      slug: data.slug ?? current.slug,
      status: data.status ?? current.status,
      ...(description === undefined ? {} : { description }),
      updatedAt: this.clock().toISOString(),
    });
    return this.repository.update(project);
  }

  archiveProject(id: string): Promise<Project> {
    return this.updateProject(id, { status: 'archived' });
  }
}
