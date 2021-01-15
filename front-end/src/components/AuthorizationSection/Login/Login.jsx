import React from 'react';
import PropTypes from 'prop-types';

import { LoginWrapper, LoginContent } from './styled';

import THEME_VARIANT from '../../../constants/themeVariant';

const Login = ({ themeVariant }) => (
  <LoginWrapper themeVariant={themeVariant}>
    <LoginContent>Qwes</LoginContent>
  </LoginWrapper>
);

Login.propTypes = {
  themeVariant: PropTypes.string,
};

Login.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Login;
