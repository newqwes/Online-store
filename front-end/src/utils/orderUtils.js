import { getOr } from 'lodash/fp';

const getInitialUserValues = (authorization) => {
  const email = getOr('', ['userData', 'email'], authorization);
  const phone = getOr('', ['userData', 'phone'], authorization);

  return { email, phone };
};

export default getInitialUserValues;
