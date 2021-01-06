import React from 'react';
import PropTypes from 'prop-types';
import LabelWrapper from './styled';
import FONT_SIZE from '../../constants/fontSize';
import THEME_VARIANT from '../../constants/themevariant';

const Label = ({ text, ...other }) => <LabelWrapper {...other}>{text}</LabelWrapper>;

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  themevariant: PropTypes.string,
  otherstyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Label.defaultProps = {
  fontSize: FONT_SIZE.large,
  themevariant: THEME_VARIANT.default,
};

export default Label;
