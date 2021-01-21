import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';

import { AuthorizationWrapper, AuthorizationContent } from './styled';

import LoginForm from './LoginForm';

const AuthorizationSection = ({ themeVariant, login, isSuccess }) => (
  <AuthorizationWrapper themeVariant={themeVariant}>
    <AuthorizationContent>
      <LoginForm onSubmit={login} isSuccess={isSuccess} />
    </AuthorizationContent>
  </AuthorizationWrapper>
);

AuthorizationSection.propTypes = {
  themeVariant: PropTypes.string,
  login: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

AuthorizationSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default AuthorizationSection;
