import React from 'react';
import PropTypes from 'prop-types';

import { productsType } from '../../propType';
import { OrderSectionWrapper, TotalPriceContent } from './styled';

import Flex from '../Flex';
import Link from '../Link';
import Label from '../Label';
import Button from '../Button';
import Сurrency from '../Сurrency';
import OrderList from './OrderList';

import FONT_SIZE from '../../constants/fontSize';
import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import CURRENCY_SIGN from '../../constants/currencySign';
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
        <Link to={ROUTER_PATH.orderSubmit}>
          <Button text='Оформить заказ' />
        </Link>
      </Flex>
    </TotalPriceContent>
  </OrderSectionWrapper>
);

OrderSection.propTypes = {
  cart: productsType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
