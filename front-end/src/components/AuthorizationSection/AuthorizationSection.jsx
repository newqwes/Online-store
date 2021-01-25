import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import { AuthorizationWrapper, AuthorizationContent } from './styled';

import LoginForm from './LoginForm';

const AuthorizationSection = ({ themeVariant, login, flag }) => (
  <AuthorizationWrapper themeVariant={themeVariant}>
    <AuthorizationContent>
      <LoginForm onSubmit={login} flag={flag} />
    </AuthorizationContent>
  </AuthorizationWrapper>
);

AuthorizationSection.propTypes = {
  themeVariant: PropTypes.string,
  login: PropTypes.func.isRequired,
  flag: PropTypes.bool.isRequired,
};

AuthorizationSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default AuthorizationSection;
