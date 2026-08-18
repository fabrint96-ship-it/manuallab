import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const currentDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],

  envDir: resolve(currentDirectory, '../..'),

  test: {
    environment: 'jsdom',

    globals: true,

    setupFiles: ['./src/test/setup.ts'],

    include: ['src/**/*.test.{ts,tsx}'],

    passWithNoTests: true,
  },
});
