import knex from 'knex';
import bookshelfLib from 'bookshelf';
import config from '../config/knexfile';
import errorHandler from '../utils/errorHandler';

const PRODUCT_TABLE = 'product';
const OPTION_TABLE = 'product_option';

const dbConfig = config.development;

const database = knex(dbConfig);

const bookshelf = bookshelfLib(database);

const Product = bookshelf.model('Product', {
  tableName: PRODUCT_TABLE,

  options() {
    return this.hasMany('Option');
  },
});

bookshelf.model('Option', {
  tableName: OPTION_TABLE,
});

class ProductsService {
  createResult = (status, message, data = {}) => ({ status, message, data });

  async getAll() {
    try {
      const options = await database(PRODUCT_TABLE)
        .join(OPTION_TABLE, `${PRODUCT_TABLE}.id`, `${OPTION_TABLE}.product_id`)
        .select();

      return this.createResult(200, 'Success', options);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async getByID(id) {
    try {
      const product = await Product.where({ id }).fetch({ withRelated: ['options'] });

      return this.createResult(200, 'Success', product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id) {
    try {
      // Need to do
      return this.createResult(200, 'Success', id);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async delete(id) {
    try {
      // Need to do
      return this.createResult(200, 'Success', id);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async create(body) {
    try {
      // Need to do
      return this.createResult(201, 'Success', body);
    } catch (error) {
      return errorHandler(error);
    }
  }
}

export default new ProductsService();
