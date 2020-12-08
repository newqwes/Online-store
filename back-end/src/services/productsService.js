import errorHandler from '../utils/errorHandler';

import Product from '../database/models/productModel';

class ProductsService {
  createResult = (status, data = {}) => ({ status, message: 'Success', data });

  async getAll() {
    try {
      const products = await Product.findAll();

      return this.createResult(200, products);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async getByID(id) {
    try {
      const product = id;

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id, body) {
    try {
      const { options, ...attributes } = body;

      const result = body;

      return this.createResult(200, result);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async delete(id) {
    try {
      return this.createResult(200, id);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async create(body) {
    try {
      const { options, ...attributes } = body;

      return this.createResult(201, body);
    } catch (error) {
      return errorHandler(error);
    }
  }
}

export default new ProductsService();
