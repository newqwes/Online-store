import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import products from './products';
import authorization from './authorization';
import order from './order';
import cart from './cart';

const rootReducer = combineReducers({
  products,
  cart,
  authorization,
  order,
  form,
});

export default rootReducer;
