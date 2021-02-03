import React from 'react';
import { get } from 'lodash/fp';
import PropTypes from 'prop-types';

import cartCost from '../../utils/orderUtils';
import { productsType } from '../../propType';

import FONT_SIZE from '../../constants/fontSize';
import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Link from '../Link';
import Label from '../Label';
import Button from '../Button';
import OrderList from './OrderList';
import ValueFormater from '../ValueFormater';

import { OrderSectionWrapper, TotalPriceContent } from './styled';

const OrderSection = ({ themeVariant, cart, removeFromCart, addToCart }) => {
  const currencySign = get(['0', 'currencySign'], cart);

  const totalPrice = cartCost(cart);

  return (
    <OrderSectionWrapper themeVariant={themeVariant}>
      <OrderList cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
      <TotalPriceContent>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Label text='Сумма заказа:' fontSize={FONT_SIZE.large} />
          <ValueFormater value={totalPrice} postfix={currencySign} />
        </Flex>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Link to={ROUTER_PATH.orderSubmit}>
            <Button text='Оформить заказ' />
          </Link>
        </Flex>
      </TotalPriceContent>
    </OrderSectionWrapper>
  );
};

OrderSection.propTypes = {
  cart: productsType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

OrderSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default OrderSection;
