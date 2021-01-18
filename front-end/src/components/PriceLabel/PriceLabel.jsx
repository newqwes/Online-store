import React from 'react';
import PropTypes from 'prop-types';
import PriceLabelWrapper from './styled';

import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import THEME_VARIANT from '../../constants/themeVariant';

const PriceLabel = ({ price, fontSize, textAlign, fontWeight, themeVariant, nominal }) => (
  <PriceLabelWrapper
    fontSize={fontSize}
    textAlign={textAlign}
    fontWeight={fontWeight}
    themeVariant={themeVariant}
  >
    {price + nominal}
  </PriceLabelWrapper>
);

PriceLabel.propTypes = {
  price: PropTypes.number.isRequired,
  nominal: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.number,
  themeVariant: PropTypes.string,
};

PriceLabel.defaultProps = {
  fontSize: FONT_SIZE.medium,
  fontWeight: FONT_WEIGHT.bold,
  textAlign: TEXT_ALIGN.left,
  themeVariant: THEME_VARIANT.default,
};

export default PriceLabel;
