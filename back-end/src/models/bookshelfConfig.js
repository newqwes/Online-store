import knex from 'knex';
import bookshelfLib from 'bookshelf';
import config from '../config/knexfile';

const dbConfig = config.development;

const database = knex(dbConfig);

const bookshelf = bookshelfLib(database);

export default bookshelf;
