exports.up = function (knex) {
  return knex.schema
    .createTable('product_photos', (table) => {
      table.increments('id').primary();
      table.string('url', 500).notNullable();
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
      knex('product_photos').insert([
        {
          url:
            'https://images.dominos.by/media/dominos/osg/api/2020/04/21/tsyplenok__dominator_small-min.png',
          product_id: 1,
        },
      ])
    );
};

exports.down = function (knex) {
  return knex.schema.dropTable('product_photos');
};
