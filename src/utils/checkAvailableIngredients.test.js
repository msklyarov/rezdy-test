import checkAvailableIngredients from './checkAvailableIngredients';

it('checkAvailableIngredients test', () => {
  expect(checkAvailableIngredients(['a', 'b', 'c'], ['a', 'b'])).toBeFalsy();
  expect(checkAvailableIngredients(['a', 'b', 'c'], ['e', 'a', 'b', 'd', 'c'])).toBeTruthy();
});