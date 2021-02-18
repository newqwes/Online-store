import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';
import ValueFormater from '../ValueFormatter';

import FONT_SIZE from '../../constants/fontSize';
import { JUSTIFY_CONTENT } from '../../constants/position';

import TotalPriceWrapper from './styled';

const TotalPrice = ({ value, currencySign, labelText }) => (
  <TotalPriceWrapper>
    <Flex justifyContent={JUSTIFY_CONTENT.flexEnd}>
      <Label text={labelText} fontSize={FONT_SIZE.large} />
      <ValueFormater value={value} postfix={currencySign} />
    </Flex>
  </TotalPriceWrapper>
);

TotalPrice.propTypes = {
  value: PropTypes.number,
  labelText: PropTypes.string,
  currencySign: PropTypes.string,
};

TotalPrice.defaultProps = {
  value: 0,
  labelText: '',
  currencySign: '',
};

export default TotalPrice;
