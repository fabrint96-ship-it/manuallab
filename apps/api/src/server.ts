import { createApp } from './app.js';
import { env } from './config/env.js';

const app = createApp();

const server = app.listen(env.port, env.apiHost, () => {
  console.log(
    `ManualLab API listening on http://${env.apiHost}:${env.port} (${env.nodeEnv})`,
  );
});

function shutdown(signal: string): void {
  console.log(`${signal} received. Shutting down ManualLab API.`);

  server.close((error) => {
    if (error) {
      console.error('Failed to close HTTP server.', error);
      process.exitCode = 1;
      return;
    }

    process.exitCode = 0;
  });
}

process.on('SIGTERM', () => {
  shutdown('SIGTERM');
});

process.on('SIGINT', () => {
  shutdown('SIGINT');
});
