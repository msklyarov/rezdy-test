import { innerJoin } from 'ramda';

export default(recipeIngredients: string[], frigeIngredients: string[]) =>
  innerJoin(
    (rTitle: string, fTitle: string) => rTitle.toLowerCase() === fTitle.toLowerCase(),
    recipeIngredients, frigeIngredients
  ).length === recipeIngredients.length;
