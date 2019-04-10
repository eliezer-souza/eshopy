import 'reflect-metadata';

import express from 'express';
import http from 'http';
import loadModules from './modules/config/load-modules.config';
import createConnection from './modules/config/create-connection.config';
import router from './api';

const PORT = process.env.PORT || 3000;

async function startServer() : Promise<void> {
  await createConnection();

  const app = express();
  loadModules(app);

  app.use(router);

  const server = http.createServer(app);
  server.listen(PORT, () => console.log(`server started on port ${PORT} (${process.env.NODE_ENV})`));
}

setImmediate(startServer);
