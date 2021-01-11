import React from 'react';
import PropTypes from 'prop-types';
import LabelWrapper from './styled';

import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import TEXT_ALIGN from '../../constants/textAlign';
import THEME_VARIANT from '../../constants/themeVariant';

const Label = ({ text, fontSize, textAlign, fontWeight, themeVariant, shareStyles }) => (
  <LabelWrapper
    fontSize={fontSize}
    textAlign={textAlign}
    fontWeight={fontWeight}
    themeVariant={themeVariant}
    shareStyles={shareStyles}
  >
    {text}
  </LabelWrapper>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  textAlign: PropTypes.string,
  fontWeight: PropTypes.number,
  themeVariant: PropTypes.string,
  shareStyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Label.defaultProps = {
  fontSize: FONT_SIZE.large,
  fontWeight: FONT_WEIGHT.bold,
  textAlign: TEXT_ALIGN.left,
  themeVariant: THEME_VARIANT.default,
};

export default Label;
