import { getOr } from 'lodash/fp';
import { createSelector } from 'reselect';

const getAuthData = (authorization) => authorization;

const getInitialUserValues = createSelector(getAuthData, (authorization) => {
  const email = getOr('', ['userData', 'email'], authorization);
  const phone = getOr('', ['userData', 'phone'], authorization);
  const login = getOr('', ['userData', 'login'], authorization);

  return { email, phone, login };
});

export default getInitialUserValues;
