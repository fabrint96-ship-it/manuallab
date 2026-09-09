import {
  type SupabaseClient,
  type PostgrestError,
} from '@supabase/supabase-js';
import { projectRowToDomain, projectToRow } from '@manuallab/database';
import { type Project } from '@manuallab/shared';
import { type ProjectDatabase } from './project-database.js';
import { type ProjectRepository } from './project-repository.js';
import {
  ProjectNotFoundError,
  ProjectSlugConflictError,
} from './project-errors.js';

function persistenceFailure(error: PostgrestError, slug?: string): never {
  if (
    slug !== undefined &&
    error.code === '23505' &&
    error.message.includes('"projects_slug_unique"')
  ) {
    throw new ProjectSlugConflictError(slug, { cause: error });
  }
  throw new Error('Project persistence operation failed', { cause: error });
}

export class SupabaseProjectRepository implements ProjectRepository {
  constructor(private readonly client: SupabaseClient<ProjectDatabase>) {}

  async create(project: Project): Promise<Project> {
    const row = projectToRow(project);
    const { data, error } = await this.client
      .schema('public')
      .from('projects')
      .insert(row)
      .select()
      .single();
    if (error) persistenceFailure(error, row.slug);
    return projectRowToDomain(data);
  }

  async findById(id: string): Promise<Project | null> {
    const { data, error } = await this.client
      .schema('public')
      .from('projects')
      .select()
      .eq('id', id)
      .maybeSingle();
    if (error) persistenceFailure(error);
    return data === null ? null : projectRowToDomain(data);
  }

  async findBySlug(slug: string): Promise<Project | null> {
    const { data, error } = await this.client
      .schema('public')
      .from('projects')
      .select()
      .eq('slug', slug)
      .maybeSingle();
    if (error) persistenceFailure(error);
    return data === null ? null : projectRowToDomain(data);
  }

  async findAll(): Promise<Project[]> {
    const { data, error } = await this.client
      .schema('public')
      .from('projects')
      .select()
      .order('created_at', { ascending: false })
      .order('id', { ascending: true });
    if (error) persistenceFailure(error);
    if (data === null) throw new Error('Project list returned no data');
    return data.map(projectRowToDomain);
  }

  async update(project: Project): Promise<Project> {
    const row = projectToRow(project);
    // Immutable identity/creation time are never part of the update payload.
    const { data, error } = await this.client
      .schema('public')
      .from('projects')
      .update({
        name: row.name,
        slug: row.slug,
        description: row.description,
        status: row.status,
        updated_at: row.updated_at,
      })
      .eq('id', row.id)
      .select()
      .maybeSingle();
    if (error) persistenceFailure(error, row.slug);
    if (data === null) throw new ProjectNotFoundError(project.id);
    return projectRowToDomain(data);
  }
}
