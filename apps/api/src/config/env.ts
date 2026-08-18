import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { config } from 'dotenv';
import { z } from 'zod';

const currentDirectory = dirname(fileURLToPath(import.meta.url));

const rootEnvPath = resolve(currentDirectory, '../../../../.env');

config({
  path: rootEnvPath,
});

function emptyStringToUndefined(value: unknown): unknown {
  return value === '' ? undefined : value;
}

const optionalString = z.preprocess(
  emptyStringToUndefined,
  z.string().min(1).optional(),
);

const optionalUrl = z.preprocess(emptyStringToUndefined, z.url().optional());

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),

  API_HOST: z.string().min(1).default('127.0.0.1'),

  API_PORT: z.coerce.number().int().min(1).max(65535).default(3000),

  PORT: z.coerce.number().int().min(1).max(65535).optional(),

  WEB_URL: z.url().default('http://localhost:5173'),

  API_URL: z.url().default('http://localhost:3000'),

  SUPABASE_URL: optionalUrl,

  SUPABASE_PUBLISHABLE_KEY: optionalString,

  SUPABASE_SECRET_KEY: optionalString,

  DATABASE_URL: optionalString,

  OPENAI_API_KEY: optionalString,
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error('Invalid environment configuration.');
  console.error(z.treeifyError(result.error));

  throw new Error('Invalid environment configuration.');
}

export const env = {
  nodeEnv: result.data.NODE_ENV,
  apiHost:
    result.data.NODE_ENV === 'production' ? '0.0.0.0' : result.data.API_HOST,
  port: result.data.PORT ?? result.data.API_PORT,
  webUrl: result.data.WEB_URL,
  apiUrl: result.data.API_URL,

  supabase: {
    url: result.data.SUPABASE_URL,
    publishableKey: result.data.SUPABASE_PUBLISHABLE_KEY,
    secretKey: result.data.SUPABASE_SECRET_KEY,
  },

  databaseUrl: result.data.DATABASE_URL,

  openAiApiKey: result.data.OPENAI_API_KEY,
} as const;
