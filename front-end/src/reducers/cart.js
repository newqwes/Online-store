import { findIndex } from 'lodash';
import { assoc } from 'lodash/fp';
import { ADD_TO_CART } from '../actions';

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const a = findIndex(state, ['id', action.payload.id]);
      if (a >= 0) {
        // TODO
        assoc(state, [a, 'options'], action.payload.options[0]);
        console.log(state);
        return state;
      }
      return [...state, action.payload];
    }
    default:
      return state;
  }
};

export default cart;
