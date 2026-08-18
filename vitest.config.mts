import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: [
      'apps/api/src/**/*.test.ts',
      'packages/*/src/**/*.test.ts',
      'tests/integration/**/*.test.ts',
    ],

    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      'tests/e2e/**',
    ],

    environment: 'node',

    passWithNoTests: true,

    coverage: {
      reporter: ['text', 'html', 'lcov'],
    },
  },
});
