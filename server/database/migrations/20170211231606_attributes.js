exports.up = knex => knex.schema.createTable('attributes', (table) => {
  table.increments('id').primary();
  table.string('name');
  table.decimal('range', 4);
  table.decimal('aoe', 4);
  table.decimal('singleTarget', 4);
  table.decimal('hexing', 4);
  table.decimal('lockdown', 4);
  table.decimal('buff', 4);
  table.decimal('health', 4);
  table.decimal('mobility', 4);
});

exports.down = knex => knex.schema.dropTable('attributes');
