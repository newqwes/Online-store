import knex from 'knex';
import config from '../config/knexfile';

const dbConfig = config.development;
const database = knex(dbConfig);

class BaseService {
  constructor(tabelName) {
    this.table = tabelName;
  }

  async getAll() {
    try {
      const item = await database.select().from(this.table);
      return item;
    } catch (error) {
      return null;
    }
  }

  async getByID(id) {
    try {
      const item = await database(this.table).where('id', id);
      return item;
    } catch (error) {
      return null;
    }
  }

  async create(body) {
    try {
      const item = await database(this.table).insert(body);
      return item;
    } catch (error) {
      return null;
    }
  }
}

export default BaseService;
