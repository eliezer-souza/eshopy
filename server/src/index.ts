import 'reflect-metadata';

import createConnection from '@eshopy/config/create-connection.config';
import dotenv from 'dotenv';
import http from 'http';

import Application from './application';

dotenv.config();

const PORT = process.env.PORT || 3000;

export default async function startServer(): Promise<void> {
  const server = http.createServer(Application);

  // creating the connection with database
  await createConnection();

  // tslint:disable-next-line:no-console
  server.listen(PORT, () => console.log(`server started on port ${PORT} (${process.env.NODE_ENV})`));
}

setImmediate(startServer);
