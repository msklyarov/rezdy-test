export type IngredientsAction = {
  type: string,
  payload?: Promise<Ingredient[]>,
};

export type Ingredient = {
  title: string,
  'best-before': Date,
  'use-by': Date
}
