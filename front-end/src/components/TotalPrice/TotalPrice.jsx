import React from 'react';
import PropTypes from 'prop-types';

import { productsType } from '../../propType';

import Flex from '../Flex';
import Label from '../Label';
import ValueFormater from '../ValueFormatter';

import FONT_SIZE from '../../constants/fontSize';
import { JUSTIFY_CONTENT } from '../../constants/position';

import TotalPriceWrapper from './styled';

const TotalPrice = ({ totalPrice, currencySign, text }) => (
  <TotalPriceWrapper>
    <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
      <Label text={text} fontSize={FONT_SIZE.large} />
      <ValueFormater value={totalPrice} postfix={currencySign} />
    </Flex>
  </TotalPriceWrapper>
);

TotalPrice.propTypes = {
  cart: productsType.isRequired,
  text: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  currencySign: PropTypes.string.isRequired,
};

export default TotalPrice;
