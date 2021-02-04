import React from 'react';
import { get, compose, head } from 'lodash/fp';

import cartCost from '../../utils/cartUtils';
import { productsType } from '../../propType';

import ValueFormater from '../ValueFormatter';

import FONT_SIZE from '../../constants/fontSize';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Label from '../Label';
import Flex from '../Flex';

import TotalPriceWrapper from './styled';

const TotalPrice = ({ cart }) => {
  const currencySign = compose(get('currencySign'), head)(cart);

  const totalPrice = cartCost(cart);

  return (
    <TotalPriceWrapper>
      <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
        <Label text='Сумма заказа:' fontSize={FONT_SIZE.large} />
        <ValueFormater value={totalPrice} postfix={currencySign} />
      </Flex>
    </TotalPriceWrapper>
  );
};

TotalPrice.propTypes = {
  cart: productsType.isRequired,
};

export default TotalPrice;
