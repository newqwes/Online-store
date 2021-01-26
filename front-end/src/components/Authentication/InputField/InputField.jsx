import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../../Flex';
import Label from '../../Label';
import InputFieldContent from './styled';

import THEME_VARIANT from '../../../constants/themeVariant';
import FONT_WEIGHT from '../../../constants/fontWeight';
import FONT_SIZE from '../../../constants/fontSize';
import { JUSTIFY_CONTENT } from '../../../constants/position';

const InputField = ({ input, label, type, meta: { touched, error } }) => (
  <InputFieldContent>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched && error && (
      <Flex justifyContent={JUSTIFY_CONTENT.center}>
        <Label
          text={error}
          fontWeight={FONT_WEIGHT.normal}
          fontSize={FONT_SIZE.least}
          themeVariant={THEME_VARIANT.warning}
        />
      </Flex>
    )}
  </InputFieldContent>
);

InputField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
};

export default InputField;
