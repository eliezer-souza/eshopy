import { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compress from "compression";
import errorMiddleware from "../middleware/error.middleware";

export default function loadModules(server: Application): void {
  // Configuration request body parser
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  // Enable CORS - Cross Origin Resource Sharing
  server.use(cors());

  // Secure apps by setting various HTTP headers
  server.use(helmet());

  // request logging
  server.use(morgan("combined"));

  // gzip compression
  server.use(compress());

  // error messages
  server.use(errorMiddleware);
}
