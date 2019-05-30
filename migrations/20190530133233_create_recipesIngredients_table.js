
exports.up = function(knex) {
    return knex.schema.createTable('recipes_ingredients', table => {
        table
            .increments('id')
        table
            .integer('recipeID')
            .references('id').inTable('recipes')
                .onDelete('CASCADE').onUpdate('CASCADE')
            .notNullable()
        table
            .integer('ingredientID')
            .references('id').inTable('ingredients')
                .onDelete('CASCADE').onUpdate('CASCADE')
            .notNullable()
            
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes_ingredients')
};
