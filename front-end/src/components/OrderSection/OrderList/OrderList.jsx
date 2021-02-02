import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';

import OrderListWrapper from './styled';
import { productsType } from '../../../propType';

const OrderList = ({ cart, removeFromCart, addToCart }) => {
  const mapCart = cart.map((item) => (
    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} addToCart={addToCart} />
  ));

  return <OrderListWrapper>{mapCart}</OrderListWrapper>;
};

OrderList.propTypes = {
  cart: productsType.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default OrderList;
