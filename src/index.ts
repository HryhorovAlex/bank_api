import { createConnection, Connection } from 'typeorm';

import { runServer } from './app';
createConnection({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.MYSQLDB_PORT),
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  database: process.env.MYSQLDB_DATABASE,
  entities: ['src/entity/*.ts'],
  migrations: ['./migrations/*.ts'],
  cli: {
    // migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    migrationsDir: 'src/migration',
  },
  logging: false,
  synchronize: true,
})
  .then(async (connection: Connection) => {
    console.log('[Database]: connected');

    await connection.runMigrations();
    console.log('[Migration]: completed');

    runServer();
  })
  .catch((error) => {
    console.log(error);
  });
