exports.up = function (knex) {
  return knex.schema
    .createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.string('description', 500).notNullable();
    })
    .then(() =>
      knex('products').insert([
        {
          name: 'Pizza Smile',
          description: 'The Best Pizza of world!',
        },
      ])
    );
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
