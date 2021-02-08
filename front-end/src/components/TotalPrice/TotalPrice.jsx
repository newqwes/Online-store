import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';
import ValueFormater from '../ValueFormatter';

import FONT_SIZE from '../../constants/fontSize';
import { JUSTIFY_CONTENT } from '../../constants/position';

import TotalPriceWrapper from './styled';
import TEXT from '../../constants/text';

const TotalPrice = ({ totalPrice, currencySign, text }) => (
  <TotalPriceWrapper>
    <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
      <Label text={text} fontSize={FONT_SIZE.large} />
      <ValueFormater value={totalPrice} postfix={currencySign} />
    </Flex>
  </TotalPriceWrapper>
);

TotalPrice.propTypes = {
  totalPrice: PropTypes.number,
  currencySign: PropTypes.string,
  text: PropTypes.string.isRequired,
};

TotalPrice.defaultProps = {
  totalPrice: 0,
  currencySign: TEXT.empty,
};

export default TotalPrice;
