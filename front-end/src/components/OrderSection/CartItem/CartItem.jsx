import React from 'react';
import PropTypes from 'prop-types';

import { CartItemWrapper } from './styled';

const CartItem = ({ item }) => <CartItemWrapper>{item.name}</CartItemWrapper>;

CartItem.propTypes = {
  item: PropTypes.any,
};

export default CartItem;
