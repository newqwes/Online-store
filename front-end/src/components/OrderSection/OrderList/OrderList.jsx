import React from 'react';
import PropTypes from 'prop-types';

import CartItem from '../CartItem';

import OrderListWrapper from './styled';

const OrderList = ({ cart }) => {
  const mapCart = cart.map((item) => <CartItem key={item.id} item={item} />);

  return <OrderListWrapper>{mapCart}</OrderListWrapper>;
};

OrderList.propTypes = {
  cart: PropTypes.any,
};

export default OrderList;
