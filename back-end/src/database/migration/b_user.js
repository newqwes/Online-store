exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.string('login', 50).notNullable();
      table.string('password', 50).notNullable();
      table.string('email', 50).notNullable();
      table.string('tel', 20).notNullable();
      table.integer('user_type').notNullable();
    })
    .then(() =>
      knex('users').insert([
        {
          login: 'admin',
          password: 'admin',
          email: 'newnewqwes@gmail.com',
          tel: '375333637970',
          user_type: 666,
        },
      ])
    );
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
