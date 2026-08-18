import { z } from 'zod';

const envSchema = z.object({
  VITE_SUPABASE_URL: z.url().optional(),
  VITE_SUPABASE_PUBLISHABLE_KEY: z.string().min(1).optional(),
});

const result = envSchema.safeParse(import.meta.env);

if (!result.success) {
  console.error('Invalid web environment configuration.');
  console.error(z.treeifyError(result.error));

  throw new Error('Invalid web environment configuration.');
}

export const env = {
  supabase: {
    url: result.data.VITE_SUPABASE_URL,
    publishableKey: result.data.VITE_SUPABASE_PUBLISHABLE_KEY,
  },
} as const;
