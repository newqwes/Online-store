import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './styled';

const STYLES = ['primary', 'secondary'];

const Button = ({ text, ...other }) => <ButtonStyle {...other}>{text}</ButtonStyle>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(STYLES),
  onClick: PropTypes.func,
  padding: PropTypes.number,
  weight: PropTypes.string,
  spacing: PropTypes.number,
  size: PropTypes.number,
  colorText: PropTypes.string,
};

Button.defaultProps = {
  color: 'secondary',
  padding: 0.8,
  weight: '500',
  spacing: 0.1,
  size: 1.6,
  colorText: 'secondary',
};

export default Button;
