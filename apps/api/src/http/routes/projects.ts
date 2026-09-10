import { Router, type ErrorRequestHandler, type Response } from 'express';
import { ZodError } from 'zod';
import {
  ProjectNotFoundError,
  ProjectSlugConflictError,
} from '../../projects/project-errors.js';
import { type ProjectService } from '../../projects/project-service.js';

function sendProjectNotFound(response: Response): void {
  response.status(404).json({
    error: { code: 'PROJECT_NOT_FOUND', message: 'Project not found.' },
  });
}

export function createProjectRouter(projectService: ProjectService): Router {
  const router = Router();

  router.post('/', async (request, response) => {
    const project = await projectService.createProject(request.body);
    response.status(201).json({ data: project });
  });

  router.get('/', async (_request, response) => {
    response.status(200).json({ data: await projectService.listProjects() });
  });

  // The explicit slug path must precede /:id.
  router.get('/slug/:slug', async (request, response) => {
    const project = await projectService.getProjectBySlug(request.params.slug);
    if (!project) return sendProjectNotFound(response);
    response.status(200).json({ data: project });
  });

  router.get('/:id', async (request, response) => {
    const project = await projectService.getProjectById(request.params.id);
    if (!project) return sendProjectNotFound(response);
    response.status(200).json({ data: project });
  });

  router.patch('/:id', async (request, response) => {
    const input =
      request.body !== null &&
      typeof request.body === 'object' &&
      Object.hasOwn(request.body, 'description') &&
      request.body.description === null
        ? { ...request.body, description: undefined }
        : request.body;
    response.status(200).json({
      data: await projectService.updateProject(request.params.id, input),
    });
  });

  router.post('/:id/archive', async (request, response) => {
    response.status(200).json({
      data: await projectService.archiveProject(request.params.id),
    });
  });

  const projectErrorHandler: ErrorRequestHandler = (
    error,
    _request,
    response,
    next,
  ) => {
    if (error instanceof ZodError) {
      response.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Project request validation failed.',
          details: error.issues.map(({ code, message, path }) => ({
            code,
            message,
            path,
          })),
        },
      });
      return;
    }
    if (error instanceof ProjectNotFoundError) {
      sendProjectNotFound(response);
      return;
    }
    if (error instanceof ProjectSlugConflictError) {
      response.status(409).json({
        error: {
          code: 'PROJECT_SLUG_CONFLICT',
          message: 'Project slug already exists.',
        },
      });
      return;
    }
    next(error);
  };

  router.use(projectErrorHandler);

  return router;
}
