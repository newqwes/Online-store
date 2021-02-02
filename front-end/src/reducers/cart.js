import { find, findIndex } from 'lodash';
import { assoc, get, equals } from 'lodash/fp';
import { ADD_TO_CART } from '../actions';

// const example = {
//   currencySign: '',
//   description: '',
//   id: 0,
//   name: '',
//   options: [{ id: 0, price: 0, product_id: 0, weight: 0 }],
//   photoUrl: '',
//   type: '',
//   unitSign: '',
// };

const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const incomingId = get(['payload', 'options', 'id'], action);

      const item = find(state, ({ id }) => equals(id, incomingId));

      const itemIndex = findIndex(state, ({ id }) => equals(id, incomingId));

      if (item) {
        const option = get(['payload', 'options'], action);

        const oldPermissionOptions = get('options', item);

        return assoc([itemIndex, 'options'], [...oldPermissionOptions, option], state);
      }

      return [
        ...state,
        { ...action.payload, id: incomingId, options: [get(['payload', 'options'], action)] },
      ];
    }
    default:
      return state;
  }
};
export default cart;
