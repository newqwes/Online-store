import { findIndex, cloneDeep } from 'lodash';
import { assoc, get, equals } from 'lodash/fp';

import isFound from '../utils/isFound';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const initialState = [];

const INCREMENT = 1;
const INITIAL_CART_COUNT = 1;

const cart = (state = initialState, action) => {
  const incomingId = get(['payload', 'options', 'id'], action);
  const itemIndex = findIndex(state, ({ id }) => equals(id, incomingId));
  const count = get([itemIndex, 'count'], state);

  switch (action.type) {
    case ADD_TO_CART: {
      if (isFound(itemIndex)) {
        return assoc([itemIndex, 'count'], count + INCREMENT, state);
      }

      return [
        ...state,
        {
          ...action.payload,
          id: incomingId,
          count: INITIAL_CART_COUNT,
        },
      ];
    }

    case REMOVE_FROM_CART: {
      if (isFound(itemIndex)) {
        const cloneState = cloneDeep(state);

        cloneState.splice(itemIndex, 1);

        if (count === 1) return cloneState;

        return assoc([itemIndex, 'count'], count - INCREMENT, state);
      }

      return state;
    }

    default:
      return state;
  }
};
export default cart;
