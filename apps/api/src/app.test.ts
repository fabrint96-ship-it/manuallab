import request from 'supertest';
import { describe, expect, it } from 'vitest';

import { createApp } from './app.js';

describe('ManualLab API', () => {
  const app = createApp();

  it('returns API information', async () => {
    const response = await request(app).get('/api');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      name: 'ManualLab API',
      version: '0.1.0',
      status: 'foundation',
    });
  });

  it('returns API health status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      status: 'ok',
      service: 'manuallab-api',
      version: '0.1.0',
    });
  });

  it('returns a structured 404 error for unknown routes', async () => {
    const response = await request(app).get('/api/unknown-route');

    expect(response.status).toBe(404);

    expect(response.body).toEqual({
      error: {
        code: 'ROUTE_NOT_FOUND',
        message: 'Route GET /api/unknown-route was not found.',
      },
    });
  });
});
