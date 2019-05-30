
exports.up = function(knex) {
    return knex.schema.createTable('recipes', table =>{
        table
            .increments('id')
        table
            .string('name')
            .notNullable()
        table
            .integer('dishID')
            .references('id').inTable('dishes')
                .onDelete('CASCADE').onUpdate('CASCADE')
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipes')
};
