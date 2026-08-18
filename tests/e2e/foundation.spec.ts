import { expect, test } from '@playwright/test';

test('ManualLab foundation loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: /transform technical manuals into structured knowledge/i,
    }),
  ).toBeVisible();

  await expect(page.getByText(/web ready/i)).toBeVisible();
});

test('ManualLab API is available during E2E tests', async ({ request }) => {
  const response = await request.get('http://127.0.0.1:3000/api');

  expect(response.status()).toBe(200);

  await expect(response.json()).resolves.toEqual({
    name: 'ManualLab API',
    version: '0.1.0',
    status: 'foundation',
  });
});

test('ManualLab API health check is available', async ({ request }) => {
  const response = await request.get('http://127.0.0.1:3000/health');

  expect(response.status()).toBe(200);

  await expect(response.json()).resolves.toEqual({
    status: 'ok',
    service: 'manuallab-api',
    version: '0.1.0',
  });
});
