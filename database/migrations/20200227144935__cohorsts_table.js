
exports.up = function(knex) {
  return knex.schema.createTable('cohorts', tbl => {
    tbl.increments();

    tble
    .string('name', 256)
      .notNullable()
      .unique()
      .index();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cohorts')
};
