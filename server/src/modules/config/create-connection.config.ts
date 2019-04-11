/* eslint-disable no-await-in-loop */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import {
  Connection,
  createConnection as createConnectionORM,
  getConnectionOptions
} from 'typeorm';

export default async function createConnection(): Promise<Connection | null> {
  let retries = 5;
  while (retries) {
    try {
      const config = await getConnectionOptions(process.env.NODE_ENV);
      const secureConfig = {
        ...config,
        name: 'default',
        username: process.env.DB_USER,
        password: process.env.DB_PASS
      };
      return createConnectionORM(secureConfig);
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);
      // wait 5 seconds
      await new Promise(res => setTimeout(res, 5000));
    }
  }

  return null;
}
