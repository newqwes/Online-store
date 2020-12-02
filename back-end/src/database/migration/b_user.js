exports.up = (knex) =>
  knex.schema
    .createTable('user', (table) => {
      table.increments('id').primary();
      table.string('login', 50).notNullable();
      table.string('password', 50).notNullable();
      table.string('email', 50).notNullable();
      table.string('tel', 20).notNullable();
      table.integer('user_type').notNullable();
    })
    .then(() =>
      knex('user').insert([
        {
          login: 'admin',
          password: 'admin',
          email: 'newnewqwes@gmail.com',
          tel: '375333637970',
          user_type: 666,
        },
      ])
    );

exports.down = (knex) => knex.schema.dropTable('user');
