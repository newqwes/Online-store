import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './styled';

const Button = ({ text, onClick }) => <ButtonStyle onClick={onClick}>{text}</ButtonStyle>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
