import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const currentDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  envDir: resolve(currentDirectory, '../..'),

  plugins: [react(), tailwindcss()],
});
