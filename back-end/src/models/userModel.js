import bookshelf from './bookshelfConfig';

const User = bookshelf.Model.extend({
  tableName: 'user',
});

export default User;
