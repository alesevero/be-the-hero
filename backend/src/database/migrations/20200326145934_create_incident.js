
exports.up = function(knex) {
  return knex.schema.createTable('incident', function(table) {
    table.increments()
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()
    // relationship
    table.string('ong_id').notNullable()
    //foreign key
    table.foreign('id').references('id').inTable('ong')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incident')
};
