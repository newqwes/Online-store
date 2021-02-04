import { floor } from 'lodash';

const cartCost = (cart) => {
  const result = cart.reduce((sum, { count, options: { price } }) => sum + count * price, 0);

  return floor(result, 2);
};

export default cartCost;
