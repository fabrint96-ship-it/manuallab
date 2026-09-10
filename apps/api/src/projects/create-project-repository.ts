import { createClient } from '@supabase/supabase-js';
import { type Project } from '@manuallab/shared';
import { env } from '../config/env.js';
import { type ProjectDatabase } from './project-database.js';
import { type ProjectRepository } from './project-repository.js';
import { SupabaseProjectRepository } from './supabase-project-repository.js';

/** Uses existing server configuration and creates one client on first data access. */
export function createProjectRepository(): ProjectRepository {
  let repository: SupabaseProjectRepository | undefined;

  function getRepository(): SupabaseProjectRepository {
    if (repository) return repository;
    const { url, secretKey } = env.supabase;
    if (!url || !secretKey) {
      throw new Error('Supabase URL and server secret key are required');
    }
    repository = new SupabaseProjectRepository(
      createClient<ProjectDatabase>(url, secretKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      }),
    );
    return repository;
  }

  return {
    create: (project: Project) => getRepository().create(project),
    findById: (id: string) => getRepository().findById(id),
    findBySlug: (slug: string) => getRepository().findBySlug(slug),
    findAll: () => getRepository().findAll(),
    update: (project: Project) => getRepository().update(project),
  };
}
