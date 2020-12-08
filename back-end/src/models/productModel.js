import db from './bookshelfConfig';

export default db.model('Product', {
  tableName: 'product',

  options() {
    return this.hasMany('Option', 'product_id', 'id');
  },
});
