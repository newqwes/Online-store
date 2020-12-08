import knex from 'knex';
import bookshelf from 'bookshelf';
import config from '../config/knexfile';

const dbConfig = config.development;

const database = knex(dbConfig);

const db = bookshelf(database);

export default db;
