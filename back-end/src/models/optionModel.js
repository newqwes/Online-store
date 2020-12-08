import db from './bookshelfConfig';

export default db.model('Option', {
  tableName: 'product_option',

  products() {
    return this.belongsTo('Product', 'product_id', 'id');
  },
});
