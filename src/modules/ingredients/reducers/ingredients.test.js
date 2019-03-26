import ingredients from './ingredients';
import ActionTypes from '../constants/actionTypes';

const inputData = [{
  "title": "Ham",
  "best-before": "2019-03-29",
  "use-by": "2019-04-03"
}, {
  "title": "Cheese",
  "best-before": "2019-03-29",
  "use-by": "2019-04-03"
}];

describe('recipes reducer', () => {
  describe('fetch', () => {
    it('sets values', () => {
      expect(
        ingredients([], {
          type: ActionTypes.INGREDIENTS_FETCH.FULFILLED,
          payload: inputData,
        }),
      ).toEqual(inputData);
    });
  });
  describe('clear', () => {
    it('unsets all values', () => {
      expect(
        ingredients(inputData, {
          type: ActionTypes.INGREDIENTS_CLEAR,
        }),
      ).toEqual([]);
    });
  });
});
