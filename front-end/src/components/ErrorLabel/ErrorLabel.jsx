import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Label from '../Label';

import THEME_VARIANT from '../../constants/themeVariant';
import FONT_WEIGHT from '../../constants/fontWeight';
import FONT_SIZE from '../../constants/fontSize';

const ErrorLabel = ({ text, justifyContent }) => (
  <Flex justifyContent={justifyContent}>
    <Label
      text={text}
      fontWeight={FONT_WEIGHT.normal}
      fontSize={FONT_SIZE.least}
      themeVariant={THEME_VARIANT.warning}
    />
  </Flex>
);

ErrorLabel.propTypes = {
  text: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
};

export default ErrorLabel;
