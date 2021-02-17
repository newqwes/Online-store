import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';
import ValueFormater from '../ValueFormatter';

import FONT_SIZE from '../../constants/fontSize';
import { JUSTIFY_CONTENT } from '../../constants/position';

import TotalPriceWrapper from './styled';
import TEXT from '../../constants/text';

const TotalPrice = ({ totalCartPrice, currencySign, text }) => (
  <TotalPriceWrapper>
    <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
      <Label text={text} fontSize={FONT_SIZE.large} />
      <ValueFormater value={totalCartPrice} postfix={currencySign} />
    </Flex>
  </TotalPriceWrapper>
);

TotalPrice.propTypes = {
  totalCartPrice: PropTypes.number,
  currencySign: PropTypes.string,
  text: PropTypes.string.isRequired,
};

TotalPrice.defaultProps = {
  totalCartPrice: 0,
  currencySign: TEXT.empty,
};

export default TotalPrice;
