import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash/fp';

import THEME_VARIANT from '../../constants/themeVariant';

import ButtonWrapper from './styled';

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
  onClick: noop,
  themeVariant: THEME_VARIANT.default,
};

export default Button;
