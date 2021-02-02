import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Сurrency from '../Сurrency';
import OrderList from './OrderList';

import FONT_SIZE from '../../constants/fontSize';
import THEME_VARIANT from '../../constants/themeVariant';

import { OrderSectionWrapper, TotalPriceContent } from './styled';

import { productsType } from '../../propType';
import CURRENCY_SIGN from '../../constants/currencySign';

const OrderSection = ({ themeVariant, cart, removeFromCart, addToCart, totalPrice }) => (
  <OrderSectionWrapper themeVariant={themeVariant}>
    <OrderList cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
    <TotalPriceContent>
      <Label text='Сумма заказа:' fontSize={FONT_SIZE.large} />
      <Сurrency value={totalPrice} postfix={CURRENCY_SIGN.BYN} />
    </TotalPriceContent>
  </OrderSectionWrapper>
);

OrderSection.propTypes = {
  themeVariant: PropTypes.string,
  cart: productsType.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
