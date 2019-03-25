import create from '../../../utils/createReduxPromiseActionType';
const actionTypes = {
  RECIPES_FETCH: create('RECIPES_FETCH'),
  RECIPES_CLEAR: 'RECIPES_CLEAR',
};

export default actionTypes;
