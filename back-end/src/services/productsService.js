import errorHandler from '../utils/errorHandler';
import Product from '../database/models/product';
import Option from '../database/models/option';

class ProductsService {
  createResult = (status, data = {}) => ({ status, message: 'Success', data });

  async getAll() {
    try {
      const products = await Product.findAll({ include: { model: Option, as: 'options' } });

      return this.createResult(200, products);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async getByID(id) {
    try {
      const product = await Product.findOne({
        where: { id },
        include: { model: Option, as: 'options' },
      });

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id, body) {
    try {
      const product = await Product.update(body, {
        where: { id },
        include: { model: Option, as: 'options' },
      });

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async delete(id) {
    try {
      await Product.destroy({ where: { id } });

      return this.createResult(200);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async create(body) {
    try {
      const product = await Product.create(body, {
        include: { model: Option, as: 'options' },
      });

      return this.createResult(201, product);
    } catch (error) {
      return errorHandler(error);
    }
  }
}

export default new ProductsService();
