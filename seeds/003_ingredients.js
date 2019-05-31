exports.seed = async function(knex) {
  await knex('ingredients').insert([
    { id: 1, name: 'cheese'},
    { id: 2, name: 'pepperoni'},
    { id: 3, name: 'bacon'},

  ])
};