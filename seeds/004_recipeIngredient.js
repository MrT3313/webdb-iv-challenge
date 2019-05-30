
exports.seed = async function(knex) {
  await knex('recipes_ingredients').insert([
    // Pepperoni Pizza
      { id: 1, recipeID: 1, ingredientID: 5, amount: 50, units: 'slices'},

    // Cheese Pizza
      { id: 2, recipeID: 1, ingredientID: 1, amount: 2, units: 'cups'},

    // Cheese Burger
      { id: 3, recipeID: 2, ingredientID: 1, amount: 2, units: 'slices'},
      
    // Bacon Burger
      { id: 4, recipeID: 2, ingredientID: 4, amount: 1, units: 'lb'},
  ])
};
