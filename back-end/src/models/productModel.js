import bookshelf from './bookshelfConfig';
import Option from './optionModel';

const Product = bookshelf.Model.extend({
  tableName: 'product',

  options() {
    return this.hasMany(Option);
  },
});

export default Product;
