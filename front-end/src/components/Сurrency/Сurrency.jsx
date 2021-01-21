import React from 'react';
import PropTypes from 'prop-types';
import СurrencyWrapper from './styled';

import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import THEME_VARIANT from '../../constants/themeVariant';

const Сurrency = ({ value, prefix, postfix, fontSize, textAlign, fontWeight, themeVariant }) => (
  <СurrencyWrapper
    fontSize={fontSize}
    textAlign={textAlign}
    fontWeight={fontWeight}
    themeVariant={themeVariant}
  >
    {prefix}
    {value}
    {postfix}
  </СurrencyWrapper>
);

Сurrency.propTypes = {
  value: PropTypes.number.isRequired,
  postfix: PropTypes.string,
  prefix: PropTypes.string,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.number,
  themeVariant: PropTypes.string,
};

Сurrency.defaultProps = {
  postfix: '',
  prefix: '',
  fontSize: FONT_SIZE.medium,
  fontWeight: FONT_WEIGHT.bold,
  textAlign: TEXT_ALIGN.left,
  themeVariant: THEME_VARIANT.default,
};

export default Сurrency;
