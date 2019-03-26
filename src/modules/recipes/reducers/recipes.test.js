import recipes from './recipes';
import ActionTypes from '../constants/actionTypes';

const inputData = [{
  "title": "Ham and Cheese Toastie",
  "ingredients": ["Ham", "Cheese", "Bread", "Butter"]
}, {
  "title": "Fry-up",
  "ingredients": ["Bacon", "Eggs", "Baked Beans", "Mushrooms", "Sausage", "Bread"]
}];

describe('recipes reducer', () => {
  describe('fetch', () => {
    it('sets values', () => {
      expect(
        recipes([], {
          type: ActionTypes.RECIPES_FETCH.FULFILLED,
          payload: inputData,
        }),
      ).toEqual(inputData);
    });
  });
  describe('clear', () => {
    it('unsets all values', () => {
      expect(
        recipes(inputData, {
          type: ActionTypes.RECIPES_CLEAR,
        }),
      ).toEqual([]);
    });
  });
});
