export type RecipesAction = {
  type: string,
  payload?: Promise<Recipe[]>,
};

export type Recipe = {
  title: string,
  ingredients: string[]
}

