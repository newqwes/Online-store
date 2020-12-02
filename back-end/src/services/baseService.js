const config = require('../config/knexfile').development;
// eslint-disable-next-line import/order
const knex = require('knex')(config);

class BaseService {
  constructor(tabelName) {
    this.table = tabelName;
  }

  async getAll() {
    try {
      const item = await knex.select().from(this.table);
      return item;
    } catch (error) {
      return null;
    }
  }

  async getByID(id) {
    try {
      const item = await knex(this.table).where('id', id);
      return item;
    } catch (error) {
      return null;
    }
  }

  async create(body) {
    try {
      const item = await knex(this.table).insert(body);
      return item;
    } catch (error) {
      return null;
    }
  }
}

exports.BaseService = BaseService;
