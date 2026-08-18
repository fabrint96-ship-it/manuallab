import express, { type Express } from 'express';

import { errorHandler } from './http/middleware/error-handler.js';
import { notFoundHandler } from './http/middleware/not-found.js';
import { healthRouter } from './http/routes/health.js';
import { apiRouter } from './http/routes/index.js';

export function createApp(): Express {
  const app = express();

  app.disable('x-powered-by');

  app.use(express.json());

  app.use('/health', healthRouter);
  app.use('/api', apiRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
