import React from 'react';
import PropTypes from 'prop-types';

import FONT_SIZE from '../../constants/fontSize';
import FONT_WEIGHT from '../../constants/fontWeight';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Label from '../Label';

const InputField = ({
  input,
  label,
  type,
  placeholder,
  StyledComponent,
  meta: { touched, error },
}) => {
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
    <StyledComponent isError={touched && error}>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && errorLabel}
    </StyledComponent>
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
  placeholder: PropTypes.string.isRequired,
  StyledComponent: PropTypes.elementType.isRequired,

  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
};

export default InputField;
