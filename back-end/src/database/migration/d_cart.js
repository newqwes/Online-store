exports.up = function (knex) {
  return knex.schema
    .createTable('carts', (table) => {
      table.increments('id').primary();
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('product_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('option_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product_options')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .then(() =>
      knex('carts').insert([
        {
          user_id: 1,
          product_id: 1,
          option_id: 1,
        },
      ])
    );
};

exports.down = function (knex) {
  return knex.schema.dropTable('carts');
};
