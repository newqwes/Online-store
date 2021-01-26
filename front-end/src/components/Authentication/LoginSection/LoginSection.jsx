import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import { LoginSectionWrapper, LoginSectionContent } from './styled';
import LoginFormContainer from '../../../containers/LoginFormContainer';
import Flex from '../../Flex';

const LoginSection = ({ themeVariant, login }) => (
  <LoginSectionWrapper themeVariant={themeVariant}>
    <LoginSectionContent>
      <Flex justifyContent={JUSTIFY_CONTENT.center}>
        <LoginFormContainer onSubmit={login} />
      </Flex>
    </LoginSectionContent>
  </LoginSectionWrapper>
);

LoginSection.propTypes = {
  themeVariant: PropTypes.string,
  login: PropTypes.func.isRequired,
};

LoginSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default LoginSection;
