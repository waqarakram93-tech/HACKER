import recipes from '../data/recipes.js'

export const getAllRecipes = (req, res) => res.json(recipes)

export const getSingleRecipe = (req, res) => {

    const recipe = parseInt(req.params.id);
    //console.log(recipe)
    const result = recipes.find(item => item.id === recipe)
    //console.log(result)
    res.json(result)
}

export const createRecipe = (req, res) => {
    const newRecipe = {
        id: recipes.length + 1,
        ...req.body
    }
    recipes.push(newRecipe)
    res.json(newRecipe)
}
export const updateRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, description, ingredents, images } = req.body;

    const recipe = recipes.find((recipe) => recipe.id === id)
    if (title) { recipe.title = title; }
    if (description) { recipe.description = description; }
    if (ingredents) { recipe.ingredents = ingredents; }
    if (images) { recipe.images = images; }
    res.json(recipe)

}
export const deleteRecipe = (req, res) => {
    const id = parseInt(req.params.id);
    const result = recipes.filter((recipe) => recipe.id != id)
    res.json(result)



}
