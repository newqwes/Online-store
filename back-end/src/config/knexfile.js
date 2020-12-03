import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' });

export default {
  development: {
    client: 'pg',
    connection: {
      database: process.env.PGDATABASE,
      host: process.env.PGHOST,
      password: process.env.PGPASSWORD || '',
      port: process.env.PGPORT,
      user: process.env.PGUSER,
    },
    migrations: {
      directory: '../database/migration',
    },
  },
};
