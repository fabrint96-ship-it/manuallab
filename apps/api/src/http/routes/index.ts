import { Router } from 'express';

export const apiRouter = Router();

apiRouter.get('/', (_request, response) => {
  response.status(200).json({
    name: 'ManualLab API',
    version: '0.1.0',
    status: 'foundation',
  });
});
