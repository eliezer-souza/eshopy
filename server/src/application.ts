import express from 'express';
import loadModules from '@eshopy/config/load-modules.config';
import services from './services';

class Application {
  public express = express();

  constructor() {
    // loading all the modules and middlewares
    loadModules(this.express);
    // loading all the services
    this.express.use(services);
  }
}

export default new Application().express;
