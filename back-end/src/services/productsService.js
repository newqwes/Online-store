import Promise from 'bluebird';
import errorHandler from '../utils/errorHandler';
import Product from '../models/productModel';
import Option from '../models/optionModel';

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

      // const product = await Product;
      // console.log(`Crrr = ${product.options().create}`);

      return this.createResult(200, product);
    } catch (error) {
      return errorHandler(error);
    }
  }

  async update(id, body) {
    try {
      const { options, ...attributes } = body;

      /* Not work, do to be easy with bookself.js
      const result = await Product.forge(attributes)
        .save()
        .tap((product) =>
          Promise.map(options, (option) => product.related('product_id').create(option))
        );  */

      let newOptions = [];

      if (options.length !== 0) {
        newOptions = options.map((option) => {
          const newOption = option;
          newOption.product_id = id;

          return newOption;
        });
      }

      await Product.where({ id }).save(attributes, { method: 'update' });

      const tempq = await Option.where('product_id', id).fetchAll();

      tempq.invokeThen('destroy');

      await Option.collection(newOptions).invokeThen('save');

      const result = await Product.where({ id }).fetch({ withRelated: ['options'] });

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
      const { options, ...attributes } = body;

      const product = await new Product().save(attributes);

      const optionsWithIdProduct = options.map((oldOption) => {
        const option = oldOption;
        option.product_id = product.id;

        return option;
      });

      await Option.collection(optionsWithIdProduct).invokeThen('save');

      return this.createResult(201, body);
    } catch (error) {
      return errorHandler(error);
    }
  }
}

export default new ProductsService();
