import errorMiddleware from '@eshopy/middleware/error.middleware';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

export default function loadModules(server: Application): void {
  // Configuration request body parser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // Enable CORS - Cross Origin Resource Sharing
  server.use(cors());

  // Secure apps by setting various HTTP headers
  server.use(helmet());

  // request logging
  server.use(morgan('combined'));

  // gzip compression
  server.use(compress());

  // error messages
  server.use(errorMiddleware);
}
