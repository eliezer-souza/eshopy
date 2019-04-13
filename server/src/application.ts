import loadModules from '@eshopy/config/load-modules.config';
import * as Sentry from '@sentry/node';
import dotenv from 'dotenv';
import express from 'express';
import api from './api';

dotenv.config();

class Application {
  public express = express();

  constructor() {
    // loading configuration of Sentry
    Sentry.init({ dsn: process.env.SENTRY_DNS });
    this.express.use(Sentry.Handlers.requestHandler());

    // loading all the modules and middlewares
    loadModules(this.express);

    // loading all apis
    this.express.use(api);

    // errorHandle of Sentry
    this.express.use(Sentry.Handlers.errorHandler());
  }
}

export default new Application().express;
