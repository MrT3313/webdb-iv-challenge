exports.seed = async function(knex) {
  await knex('recipes').insert([

    { id: 1, name: 'pepperoni', dishID: 1},
    { id: 2, name: 'cheese', dishID: 1},

    { id: 3, name: 'cheese', dishID: 2},
    { id: 4, name: 'bacon', dishID: 2},
  ])
};
