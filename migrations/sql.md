SELECT * 
FROM dishes
SELECT * 
FROM recipes
SELECT * 
FROM recipes_ingredients
SELECT * 
FROM instructions

SELECT stepNumber,  stepText
FROM dishes
INNER JOIN recipes 
	ON dishes.id = recipes.dishID
INNER JOIN recipes_ingredients 
	ON recipes.id = recipes_ingredients.recipeID
INNER JOIN ingredients
	ON recipes_ingredients.ingredientID = ingredients.id
INNER JOIN instructions 
	ON recipes.id = instructions.recipeID
	
WHERE dishes.id = 1 AND recipes.id = 2
WHERE dishes.name = 'pizza' AND recipes.name = 'pepperoni'