import errorHandler from '../utils/errorHandler';
import Product from '../models/productModel';

class ProductsService {
  createResult = (status, data = {}) => ({ status, message: 'Success', data });

  async getAll() {
    try {
      const products = await Product.fetchAll({ withRelated: ['options'] });

      return this.createResult(200, products);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async getByID(id) {
    try {
      const product = await Product.where({ id }).fetch({ withRelated: ['options'] });

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id, body) {
    try {
      // Only for product not option, must do!
      const result = await Product.where({ id }).save({ ...body });
      return this.createResult(200, result);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async delete(id) {
    try {
      await Product.where({ id }).destroy();
      return this.createResult(200, id);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async create(body) {
    try {
      // Only for product not option, must do!
      await Product.forge({ ...body }).save();
      return this.createResult(201, body);
    } catch (error) {
      return errorHandler(error);
    }
  }
}

export default new ProductsService();
