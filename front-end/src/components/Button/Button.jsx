import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './styled';

const STYLES = ['primary', 'secondary'];

const Button = ({ text, color, onClick }) => (
  <ButtonStyle color={color} onClick={onClick}>
    {text}
  </ButtonStyle>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(STYLES),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'secondary',
};

export default Button;
