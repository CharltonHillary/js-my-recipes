const router = require('express').Router()
const recipes = require('../../../data/recipes.json')


//route to return all recipes
router.get('/', (request, response) => {
const allRecipes = recipes.map(({id, title, image, prepTime, difficulty}) => ({id, title, image, prepTime, difficulty}))
response.send(allRecipes)
})

//route to add new recipe
router.post('/recipe/add', (request, response) => {
const { id, title, image, ingredients, instructions, prepTime, difficulty } = request.body
const newRecipe = [id, title, image, ingredients, instructions, prepTime, difficulty]
recipes.push(newRecipe)
response.send(newRecipe)
      
})

//route to return recipe by id
router.get('/recipe/:id', (request, response) => {
    const { id } = request.params
    const found = recipes.find(r => r.id.toString() === id)
    if (found) response.send(found)
    else response.send({ error: { message: `Could not find recipe with id: ${id}` }})
})

module.exports = router
