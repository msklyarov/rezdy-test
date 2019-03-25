import { Recipe } from '../modules/recipes';
import { Ingredient } from '../modules/ingredients';

import checkAvailableIngredients from './checkAvailableIngredients';
import getMinBestBeforeDate from './getMinBestBeforeDate';

export default(recipes: Recipe[], ingredients: Ingredient[]) => {
  const freshIngredients = ingredients
    .filter(item => item['use-by'] >= new Date)
    .map(item => item.title);

  return recipes
    .filter(item => checkAvailableIngredients(item.ingredients, freshIngredients))
    .sort((a: Recipe, b: Recipe) =>
      getMinBestBeforeDate(b.ingredients, ingredients).getTime() -
      getMinBestBeforeDate(a.ingredients, ingredients).getTime());
};
