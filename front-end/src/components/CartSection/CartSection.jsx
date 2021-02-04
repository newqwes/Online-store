import React from 'react';
import PropTypes from 'prop-types';

import { cartType } from '../../propType';

import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Link from '../Link';
import Button from '../Button';
import CartItems from './CartItems';
import TotalPrice from '../TotalPrice';

import { CartSectionWrapper, TotalPriceContent, CartSectionContent } from './styled';

const CartSection = ({ themeVariant, cart, removeFromCart, addToCart }) => (
  <CartSectionWrapper themeVariant={themeVariant}>
    <CartSectionContent>
      <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
    </CartSectionContent>
    <TotalPriceContent>
      <TotalPrice cart={cart} />
      <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
        <Link to={ROUTER_PATH.order}>
          <Button text='Оформить заказ' />
        </Link>
      </Flex>
    </TotalPriceContent>
  </CartSectionWrapper>
);

CartSection.propTypes = {
  cart: cartType.isRequired,
  themeVariant: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

CartSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default CartSection;
