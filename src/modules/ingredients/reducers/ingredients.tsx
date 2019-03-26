import ActionTypes from '../constants/actionTypes';
import { IngredientsAction } from '../';

export default (state = [], action: IngredientsAction) => {
  switch (action.type) {
    case ActionTypes.INGREDIENTS_FETCH.FULFILLED:
      return action.payload;
    case ActionTypes.INGREDIENTS_CLEAR:
      return [];
    default:
      return state;
  }
};
