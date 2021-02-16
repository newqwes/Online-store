import { getOr, get } from 'lodash/fp';
import { createSelector } from 'reselect';

const initialState = get('authorization');

const getInitialUserValues = createSelector(initialState, (authorization) => {
  const { email, phone, login } = getOr('', 'userData', authorization);

  return { email, phone, login };
});

export default getInitialUserValues;
