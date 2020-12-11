import errorHandler from '../utils/errorHandler';
import Product from '../database/models/product';
import Option from '../database/models/option';

class ProductsService {
  createResult = (status, data = {}, message = 'Success') => ({ status, message, data });

  createNotFound = (id) => ({ status: 404, message: 'No such item found', data: +id });

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

      if (product) return this.createResult(200, product);

      return this.createNotFound(id);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id, body) {
    try {
      const { options, ...param } = body;

      const optionsWithId = options.map((n) => {
        const option = n;
        option.product_id = +id;
        return option;
      });

      const [isFound] = await Product.update(param, {
        where: { id },
      });

      if (!isFound) return this.createNotFound(id);

      await Option.destroy({ where: { product_id: id } });

      await Option.bulkCreate(optionsWithId);

      const product = await Product.findOne({
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
      const isFound = await Product.destroy({ where: { id } });

      if (isFound) return this.createResult(200);

      return this.createNotFound(id);
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
