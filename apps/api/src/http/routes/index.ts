import { Router } from 'express';
import { type ProjectService } from '../../projects/project-service.js';
import { createProjectRouter } from './projects.js';

export function createApiRouter(projectService: ProjectService): Router {
  const apiRouter = Router();

  apiRouter.get('/', (_request, response) => {
    response.status(200).json({
      name: 'ManualLab API',
      version: '0.1.0',
      status: 'foundation',
    });
  });

  apiRouter.use('/projects', createProjectRouter(projectService));

  return apiRouter;
}
