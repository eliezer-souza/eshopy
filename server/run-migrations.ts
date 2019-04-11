import { createConnection, getConnectionOptions } from 'typeorm';

async function runMigrations() {
  const config = await getConnectionOptions(process.env.NODE_ENV);
  const secureConfig = {
    ...config,
    name: 'default',
    username: process.env.DB_USER,
    password: process.env.DB_PASS
  };

  const conn = await createConnection(secureConfig);
  await conn.runMigrations();
}

setImmediate(runMigrations);
