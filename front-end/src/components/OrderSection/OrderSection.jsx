import React from 'react';
import PropTypes from 'prop-types';

import Label from '../Label';
import Button from '../Button';
import Сurrency from '../Сurrency';
import OrderList from './OrderList';

import FONT_SIZE from '../../constants/fontSize';
import THEME_VARIANT from '../../constants/themeVariant';
import CURRENCY_SIGN from '../../constants/currencySign';

import { OrderSectionWrapper, TotalPriceContent } from './styled';

import { productsType } from '../../propType';
import Flex from '../Flex';
import { JUSTIFY_CONTENT } from '../../constants/position';

const OrderSection = ({ themeVariant, cart, removeFromCart, addToCart, totalPrice }) => (
  <OrderSectionWrapper themeVariant={themeVariant}>
    <OrderList cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
    <TotalPriceContent>
      <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
        <Label text='Сумма заказа:' fontSize={FONT_SIZE.large} />
        <Сurrency value={totalPrice} postfix={CURRENCY_SIGN.BYN} />
      </Flex>
      <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
        <Button text='Оформить заказ' />
      </Flex>
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
