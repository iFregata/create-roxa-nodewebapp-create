import 'reflect-metadata';
import 'module-alias/register';
import { logger } from './config';
import meta from './api/meta';
import app from './api';

/* The entry point of App */
(() => {
  const server = app().listen(meta.port, () => {
    logger.info(`${meta.name} Server listening on port ${meta.port}...`);
  });
  const shutdown = () => {
    server.close(() => {
      logger.info(`${meta.name} Server has been shutdown.`);
    });
  };
  process.on('SIGTERM', shutdown); // The standard signal for a process to terminate
  process.on('SIGINT', shutdown); // Press ctrl+c
})();
