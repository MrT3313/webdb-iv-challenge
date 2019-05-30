exports.seed = async function(knex) {
    await knex('instructions').insert([
    // Pepperoni Pizza & Cheese Pizza
        { id: 1, recipeID: 1, stepNumber: 1, stepText: 'preheat oven to 2,378 degrees'},
        { id: 2, recipeID: 1, stepNumber: 2, stepText: 'open frozen pizza'},
        { id: 3, recipeID: 1, stepNumber: 3, stepText: 'put frozen pizza in oven'},
        { id: 4, recipeID: 1, stepNumber: 4, stepText: 'remove pizza from oven'},
        { id: 5, recipeID: 1, stepNumber: 5, stepText: 'take instagram pic of pizza and share with friends'},
        { id: 6, recipeID: 1, stepNumber: 6, stepText: 'eat pizza'},

    // Cheese Burger
        { id: 7, recipeID: 2, stepNumber: 1, stepText: 'buy ground beef'},
        { id: 8, recipeID: 2, stepNumber: 2, stepText: 'shape into patties'},
        { id: 9, recipeID: 2, stepNumber: 3, stepText: 'preheat grill'},
        { id: 10, recipeID: 2, stepNumber: 4, stepText: 'cook burgers for 15 min'},
        { id: 11, recipeID: 2, stepNumber: 5, stepText: 'add CHEESE'},
        { id: 12, recipeID: 2, stepNumber: 6, stepText: 'cook for 5 min'},
        { id: 13, recipeID: 2, stepNumber: 7, stepText: 'remove from grill'},
        { id: 14, recipeID: 2, stepNumber: 8, stepText: 'EAT IT'},

    // Bacon Burger
        { id: 15, recipeID: 3, stepNumber: 1, stepText: 'buy ground beef'},
        { id: 16, recipeID: 3, stepNumber: 2, stepText: 'shape into patties'},
        { id: 17, recipeID: 3, stepNumber: 3, stepText: 'preheat grill'},
        { id: 18, recipeID: 3, stepNumber: 4, stepText: 'add BACON'},
        { id: 19, recipeID: 3, stepNumber: 5, stepText: 'cook burgers for 15-20 min min'},
        { id: 20, recipeID: 3, stepNumber: 6, stepText: 'remove from grill'},
        { id: 21, recipeID: 3, stepNumber: 7, stepText: 'EAT IT'},
        
    ])
};