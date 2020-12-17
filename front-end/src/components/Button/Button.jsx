import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';

const STYLES = ['primary', 'secondary'];

const Button = ({ text, color, onClick }) => (
  <Wrapper color={color} onClick={onClick}>
    {text}
  </Wrapper>
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
