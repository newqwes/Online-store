import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './styled';
import THEME_VARIANT from '../../constants/themevariant';

const Button = ({ text, ...other }) => <ButtonStyle {...other}>{text}</ButtonStyle>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  themevariant: PropTypes.string,
  otherstyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Button.defaultProps = {
  themevariant: THEME_VARIANT.default,
};

export default Button;
