import { innerJoin } from 'ramda';

import { Ingredient } from '../modules/ingredients';

export default(recipeIngredients: string[], frigeIngredients: Ingredient[]) => {
  const data = innerJoin(
    (fItem: Ingredient, rTitle: string) => rTitle.toLowerCase() === fItem.title.toLowerCase(),
    frigeIngredients, recipeIngredients);

  return new Date(Math.min(...data.map(item => item['best-before'].getTime())));
};