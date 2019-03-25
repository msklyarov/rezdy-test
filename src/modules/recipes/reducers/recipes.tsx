import ActionTypes from '../constants/actionTypes';
import { RecipesAction } from '../';

export default (state = [], action: RecipesAction) => {
  switch (action.type) {
    case ActionTypes.RECIPES_FETCH.FULFILLED:
      return action.payload;
    case ActionTypes.RECIPES_CLEAR:
      return {};
    default:
      return state;
  }
};
