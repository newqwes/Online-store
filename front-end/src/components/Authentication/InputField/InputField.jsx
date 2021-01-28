import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import Flex from '../../Flex';
import Label from '../../Label';
import InputFieldContent from './styled';

import FONT_SIZE from '../../../constants/fontSize';
import { INPUT_TYPES } from '../../../constants/input';
import FONT_WEIGHT from '../../../constants/fontWeight';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';
import PHONE_FORMAT_MASK from '../../../constants/phoneFormatMask';

const InputField = ({ input, label, type, meta: { touched, error } }) => {
  const commonInput = <input {...input} placeholder={label} type={type} />;

  const phoneInput = (
    <NumberFormat
      format={PHONE_FORMAT_MASK.by}
      allowEmptyFormatting
      mask='_'
      {...input}
      type={type}
    />
  );

  const errorLabel = (
    <Flex justifyContent={JUSTIFY_CONTENT.center}>
      <Label
        text={error}
        fontWeight={FONT_WEIGHT.normal}
        fontSize={FONT_SIZE.least}
        themeVariant={THEME_VARIANT.warning}
      />
    </Flex>
  );

  return (
    <InputFieldContent>
      <label>{label}</label>
      {type === INPUT_TYPES.tel ? phoneInput : commonInput}
      {touched && error && errorLabel}
    </InputFieldContent>
  );
};

InputField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onDragStart: PropTypes.func.isRequired,
    onDrop: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
};

export default InputField;
