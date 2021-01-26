import React from 'react';
import PropTypes from 'prop-types';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import { RegistrationSectionWrapper, RegistrationSectionContent } from './styled';
import RegistrationFormContainer from '../../../containers/RegistrationFormContainer';
import Flex from '../../Flex';

const RegistrationSection = ({ themeVariant }) => (
  <RegistrationSectionWrapper themeVariant={themeVariant}>
    <RegistrationSectionContent>
      <Flex justifyContent={JUSTIFY_CONTENT.center}>
        <RegistrationFormContainer />
      </Flex>
    </RegistrationSectionContent>
  </RegistrationSectionWrapper>
);

RegistrationSection.propTypes = {
  themeVariant: PropTypes.string,
};

RegistrationSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default RegistrationSection;
