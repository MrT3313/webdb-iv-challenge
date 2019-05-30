exports.seed = async function(knex) {
  await knex('recipes').insert([

    // specifically dishID out of order to test

    { id: 1, name: 'pepperoni', dishID: 1},
    { id: 2, name: 'cheeseburger', dishID: 2},
    { id: 3, name: 'cheese', dishID: 1},
    { id: 4, name: 'packedburger', dishID: 2},
    { id: 5, name: 'meatlovers', dishID: 1},
    { id: 6, name: 'plain', dishID: 2},
  ])
};
