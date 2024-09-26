
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
      tbl.increments();

      tbl.string('name', 128).unique().notNullable();

    })
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable()
    })

    .createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      
      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
      
        tbl.float('quantity')
    })
    .createTable('instructions', tbl => {
      tbl.increments()
      tbl.string('name', 64).notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe')
};
