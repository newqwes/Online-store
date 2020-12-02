exports.up = (knex) =>
  knex.schema
    .createTable('product_option', (table) => {
      table.increments('id').primary();
      table.float('price', 6, 2).notNullable();
      table.float('weight', 10, 2).notNullable();
      table
        .integer('product_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('product')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .then(() =>
      knex('product_option').insert([
        {
          price: 29.99,
          weight: 560,
          product_id: 1,
        },
      ])
    );

exports.down = (knex) => knex.schema.dropTable('product_option');
