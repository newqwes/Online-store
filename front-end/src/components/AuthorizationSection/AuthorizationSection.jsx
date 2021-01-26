import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import { AuthorizationWrapper, AuthorizationContent } from './styled';
import LoginFormContainer from '../../containers/LoginFormContainer';
import Flex from '../Flex';

const AuthorizationSection = ({ themeVariant, login }) => (
  <AuthorizationWrapper themeVariant={themeVariant}>
    <AuthorizationContent>
      <Flex justifyContent={JUSTIFY_CONTENT.center}>
        <LoginFormContainer onSubmit={login} />
      </Flex>
    </AuthorizationContent>
  </AuthorizationWrapper>
);

AuthorizationSection.propTypes = {
  themeVariant: PropTypes.string,
  login: PropTypes.func.isRequired,
};

AuthorizationSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default AuthorizationSection;
