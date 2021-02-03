import { findIndex } from 'lodash';
import { assoc, get, equals } from 'lodash/fp';

import isFound from '../utils/isFound';
import isOnlyOneItem from '../utils/isOnlyOneItem';
import getStateWithoutItem from '../utils/getStateWithoutItem';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions';

const INCREMENT = 1;
const INITIAL_COUNT = 1;

const initialState = [];

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
          count: INITIAL_COUNT,
        },
      ];
    }

    case REMOVE_FROM_CART: {
      if (isOnlyOneItem(itemIndex, count)) {
        return getStateWithoutItem(state, itemIndex);
      }
      if (isFound(itemIndex)) {
        return assoc([itemIndex, 'count'], count - INCREMENT, state);
      }

      return state;
    }

    default:
      return state;
  }
};
export default cart;
