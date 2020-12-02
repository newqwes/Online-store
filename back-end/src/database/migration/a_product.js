exports.up = (knex) =>
  knex.schema
    .createTable('product', (table) => {
      table.increments('id').primary();
      table.string('name', 100).notNullable();
      table.string('description', 500).notNullable();
      table.string('photo_url', 500).notNullable();
    })
    .then(() =>
      knex('product').insert([
        {
          name: 'Pizza Smile',
          description: 'The Best Pizza of world!',
          photo_url:
            'https://images.dominos.by/media/dominos/osg/api/2020/04/21/tsyplenok__dominator_small-min.png',
        },
      ])
    );

exports.down = (knex) => knex.schema.dropTable('product');
