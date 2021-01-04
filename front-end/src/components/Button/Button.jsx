import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './styled';
import { BTN_BG_COLOR, BTN_TEXT_COLOR } from '../../constants/button';

const Button = ({ text, ...other }) => <ButtonStyle {...other}>{text}</ButtonStyle>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  btnColor: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  btnColor: BTN_BG_COLOR.primary,
  textColor: BTN_TEXT_COLOR.secondary,
};

export default Button;
