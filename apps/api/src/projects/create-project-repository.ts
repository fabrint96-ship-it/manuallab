import { createClient } from '@supabase/supabase-js';
import { env } from '../config/env.js';
import { type ProjectDatabase } from './project-database.js';
import { SupabaseProjectRepository } from './supabase-project-repository.js';

/** Uses the existing server-only configuration. Does not connect until used. */
export function createProjectRepository() {
  const { url, secretKey } = env.supabase;
  if (!url || !secretKey) {
    throw new Error('Supabase URL and server secret key are required');
  }
  return new SupabaseProjectRepository(
    createClient<ProjectDatabase>(url, secretKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    }),
  );
}
