exports.seed = async function(knex) {
  await knex('ingredients').insert([
    // Cheese COULD be broken into its own table (peperjack, provalone etc etc)
      { id: 1, name: 'cheese'},
    // Cause COULD be broken into its own table (tomato, whitesauce)
    { id: 2, name: 'tomatoSauce'},
    { id: 3, name: 'whiteSauce'},
    { id: 4, name: 'bread'},
    { id: 5, name: 'pepperoni'},
    { id: 6, name: 'jalapeno'},
    { id: 7, name: 'bacon'},

  ])
};