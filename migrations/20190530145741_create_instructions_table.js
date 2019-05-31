
exports.up = function(knex) {
    return knex.schema.createTable('instructions', table =>{
        table
            .increments('id')
        table
            .integer('recipeID')
            .references('id').inTable('recipes')
                .onDelete('CASCADE').onUpdate('CASCADE')
            .notNullable()
        table
            .integer('stepNumber')
            .notNullable()
        table
            .string('stepText')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('instructions')
};
