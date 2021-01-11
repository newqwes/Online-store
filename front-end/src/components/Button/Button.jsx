import React from 'react';
import PropTypes from 'prop-types';
import ButtonStyle from './styled';
import THEME_VARIANT from '../../constants/themeVariant';

const Button = ({ text, onClick, themeVariant, shareStyles }) => (
  <ButtonStyle onClick={onClick} themeVariant={themeVariant} shareStyles={shareStyles}>
    {text}
  </ButtonStyle>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  themeVariant: PropTypes.string,
  shareStyles: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

Button.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Button;
