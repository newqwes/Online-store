exports.up = (knex) =>
  knex.schema
    .createTable('cart', (table) => {
      table.increments('id').primary();
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('product_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('option_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product_option')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .then(() =>
      knex('cart').insert([
        {
          user_id: 1,
          product_id: 1,
          option_id: 1,
        },
      ])
    );

exports.down = (knex) => knex.schema.dropTable('cart');
