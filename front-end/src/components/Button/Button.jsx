import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import ButtonStyle from './styled';
import THEME_VARIANT from '../../constants/themeVariant';

const Button = ({ text, ...other }) => <ButtonStyle {...other}>{text}</ButtonStyle>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  themeVariant: PropTypes.string,
  myStyle: stylePropType,
};

Button.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Button;
