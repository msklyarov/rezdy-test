import axios from 'axios';
import ActionTypes from '../constants/actionTypes';

export default () => ({
  type: ActionTypes.INGREDIENTS_FETCH.name,
  payload: axios.get('https://www.mocky.io/v2/5c9075843600004b00f100fa')
    .then(response => response.data.ingredients.map((item: any) => ({
      ...item,
      'best-before': new Date(item['best-before']),
      'use-by': new Date(item['use-by'])
    })
  ))
});
