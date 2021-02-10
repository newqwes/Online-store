import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from './styled';
import THEME_VARIANT from '../../constants/themeVariant';

const Button = ({ text, onClick, themeVariant }) => (
  <ButtonWrapper onClick={onClick} themeVariant={themeVariant}>
    {text}
  </ButtonWrapper>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  themeVariant: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  themeVariant: THEME_VARIANT.default,
};

export default Button;
