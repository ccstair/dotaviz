exports.up = knex => knex.schema.createTable('hero_images', (table) => {
  table.increments('id').primary();
  table.string('name');
  table.string('thumbnail');
});

exports.down = knex => knex.schema.dropTable('hero_images');
