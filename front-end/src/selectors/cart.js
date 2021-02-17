import { get, reduce } from 'lodash/fp';
import { floor } from 'lodash';
import { createSelector } from 'reselect';

const localState = get('cart');

export const getTotalCartPrice = createSelector(
  localState,
  reduce((sum, { count, options: { price } }) => floor(sum + count * price, 2), 0)
);

export default localState;
