import errorHandler from '../utils/errorHandler';
import Product from '../database/models/product';
import Option from '../database/models/option';
import createResponse from '../utils/createResponse';

class ProductsService {
  async getAll() {
    try {
      const products = await Product.findAll({ include: { model: Option, as: 'options' } });

      return createResponse(200, 'getAll products successfully', products);
    } catch (error) {
      return errorHandler(500, error);
    }
  }

  async getByID(id) {
    try {
      const product = await Product.findOne({
        where: { id },
        include: { model: Option, as: 'options' },
      });

      if (product) return createResponse(200, 'getByID product successfully', product);

      return createResponse(404, 'getByID product this id not found', id);
    } catch (error) {
      return errorHandler(500, error);
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

      if (!isFound) return createResponse(404, 'update product, this id not found', id);

      await Option.destroy({ where: { product_id: id } });

      await Option.bulkCreate(optionsWithId);

      const product = await Product.findOne({
        where: { id },
        include: { model: Option, as: 'options' },
      });

      return createResponse(200, 'update product successfully', product);
    } catch (error) {
      return errorHandler(500, error);
    }
  }

  async delete(id) {
    try {
      const isFound = await Product.destroy({ where: { id } });

      if (isFound) return createResponse(200, 'delete product successfully');

      return createResponse(404, 'delete product, this id not found', id);
    } catch (error) {
      return errorHandler(500, error);
    }
  }

  async create(body) {
    try {
      const product = await Product.create(body, {
        include: { model: Option, as: 'options' },
      });

      return createResponse(201, 'create product successfully', product);
    } catch (error) {
      return errorHandler(500, error);
    }
  }
}

export default new ProductsService();
