import React from 'react';

import CartItem from '../CartItem';

import OrderListWrapper from './styled';
import { productsType } from '../../../propType';

const OrderList = ({ cart }) => {
  const mapCart = cart.map((item) => <CartItem key={item.id} item={item} />);

  return <OrderListWrapper>{mapCart}</OrderListWrapper>;
};

OrderList.propTypes = {
  cart: productsType.isRequired,
};

export default OrderList;
