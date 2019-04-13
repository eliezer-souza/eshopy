import loadModules from '@eshopy/config/load-modules.config';
import * as Sentry from '@sentry/node';
import dotenv from 'dotenv';
import express from 'express';
import services from './services';

dotenv.config();

class Application {
  public express = express();

  constructor() {
    // loading configuration of Sentry
    Sentry.init({ dsn: process.env.SENTRY_DNS });
    this.express.use(Sentry.Handlers.requestHandler());

    // loading all the modules and middlewares
    loadModules(this.express);

    // loading all the services
    this.express.use(services);

    // errorHandle of Sentry
    this.express.use(Sentry.Handlers.errorHandler());
  }
}

export default new Application().express;
