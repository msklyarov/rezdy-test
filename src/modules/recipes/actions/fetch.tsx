import axios from 'axios';
import ActionTypes from '../constants/actionTypes';
import { RecipesAction } from '../';

export default () => ({
  type: ActionTypes.RECIPES_FETCH.name,
  payload: axios.get('http://www.mocky.io/v2/5c85f7a1340000e50f89bd6c')
    .then(response => response.data.recipes),
});
