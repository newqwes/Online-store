import React from 'react';
import { get } from 'lodash/fp';
import PropTypes from 'prop-types';

import { cartType } from '../../propType';
import cartCost from '../../utils/cartUtils';

import FONT_SIZE from '../../constants/fontSize';
import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Link from '../Link';
import Label from '../Label';
import Button from '../Button';
import CartItems from './CartItems';
import ValueFormatter from '../ValueFormatter';

import { CartSectionWrapper, TotalPriceContent } from './styled';

const CartSection = ({ themeVariant, cart, removeFromCart, addToCart }) => {
  const currencySign = get(['0', 'currencySign'], cart);

  const totalPrice = cartCost(cart);

  return (
    <CartSectionWrapper themeVariant={themeVariant}>
      <CartItems cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} />
      <TotalPriceContent>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Label text='Сумма заказа:' fontSize={FONT_SIZE.large} />
          <ValueFormatter value={totalPrice} postfix={currencySign} />
        </Flex>
        <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
          <Link to={ROUTER_PATH.cartSubmit}>
            <Button text='Оформить заказ' />
          </Link>
        </Flex>
      </TotalPriceContent>
    </CartSectionWrapper>
  );
};

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
