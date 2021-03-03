import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';

import products from './products';
import user from './user';
import order from './order';
import cart from './cart';

const rootReducer = combineReducers({
  products,
  cart,
  user,
  order,
  form,
});

export default rootReducer;
