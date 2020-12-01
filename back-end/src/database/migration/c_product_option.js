exports.up = function (knex) {
  return knex.schema
    .createTable('product_options', (table) => {
      table.increments('id').primary();
      table.float('price', 6, 2).notNullable();
      table.float('weight', 10, 2).notNullable();
      table
        .integer('product_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .then(() =>
      knex('product_options').insert([
        {
          price: 29.99,
          weight: 560,
          product_id: 1,
        },
      ])
    );
};

exports.down = function (knex) {
  return knex.schema.dropTable('product_options');
};
