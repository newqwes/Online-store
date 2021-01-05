import React from 'react';
import PropTypes from 'prop-types';
import LabelWrapper from './styled';
import FONT_SIZE from '../../constants/fontSize';
import THEME_VARIANT from '../../constants/themeVariant';

const Label = ({ text, ...other }) => <LabelWrapper {...other}>{text}</LabelWrapper>;

Label.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  themeVariant: PropTypes.string,
};

Label.defaultProps = {
  fontSize: FONT_SIZE.large,
  themeVariant: THEME_VARIANT.default,
};

export default Label;
