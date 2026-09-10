import express, { type Express } from 'express';

import { errorHandler } from './http/middleware/error-handler.js';
import { notFoundHandler } from './http/middleware/not-found.js';
import { healthRouter } from './http/routes/health.js';
import { createApiRouter } from './http/routes/index.js';
import { createProjectRepository } from './projects/create-project-repository.js';
import { ProjectService } from './projects/project-service.js';

interface AppDependencies {
  projectService?: ProjectService;
}

export function createApp(dependencies: AppDependencies = {}): Express {
  const app = express();
  const projectService =
    dependencies.projectService ??
    new ProjectService(createProjectRepository());

  app.disable('x-powered-by');

  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/api', createApiRouter(projectService));

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
