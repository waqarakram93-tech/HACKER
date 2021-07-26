import express from 'express';
import { getAllRecipes, getSingleRecipe, createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.js';


const recipesRouter = express.Router();

recipesRouter.get('/', getAllRecipes)
recipesRouter.get('/:id', getSingleRecipe)
recipesRouter.post('/', createRecipe)
recipesRouter.put('/:id', updateRecipe)
recipesRouter.delete('/:id', deleteRecipe)

export default recipesRouter