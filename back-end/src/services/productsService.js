import errorHandler from '../utils/errorHandler';
import Product from '../database/models/product';
import Option from '../database/models/option';

class ProductsService {
  createResult = (status, data = {}) => ({ status, message: 'Success', data });

  async getAll() {
    try {
      const products = await Product.findAll({ include: Option });

      // const test = await sequelize.query(
      //   'SELECT * FROM product, product_option WHERE product_option.product_id = product.id',
      //   {
      //     type: QueryTypes.SELECT,
      //   }
      // );

      return this.createResult(200, products);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async getByID(id) {
    try {
      const product = await Product.findOne({ where: { id }, include: Option });

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id, body) {
    try {
      const { Options, ...attributes } = body;

      const product = await Product.update(attributes, {
        where: { id },
      });
      await Option.destroy({ where: { product_id: id } });
      await Option.bulkCreate(Options);

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async delete(id) {
    try {
      const product = await Product.findOne({ where: { id } });
      await product.destroy();

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
