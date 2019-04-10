import "reflect-metadata";

import express from "express";
import http from "http";
import loadModules from "./modules/config/load-modules.config";
import createConnection from "./modules/config/create-connection.config";
import applications from "./api";

const PORT = process.env.PORT || 3000;

async function startServer(): Promise<void> {
  const app = express();
  const server = http.createServer(app);

  // creating the connection with database
  await createConnection();
  // loading all the modules and middlewares
  loadModules(app);
  // loading all the applications
  app.use(applications);

  server.listen(PORT, () =>
    console.log(`server started on port ${PORT} (${process.env.NODE_ENV})`)
  );
}

setImmediate(startServer);
