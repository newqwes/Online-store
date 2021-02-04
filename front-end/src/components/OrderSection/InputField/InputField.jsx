import React from 'react';
import PropTypes from 'prop-types';

import DIRECTION from '../../../constants/direction';

import Flex from '../../Flex';

import InputFieldContent from './styled';

const InputField = ({ label, type, placeholder, meta: { touched, error } }) => (
  <InputFieldContent isError={touched && error}>
    <Flex direction={DIRECTION.column}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </Flex>
  </InputFieldContent>
);

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
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
};

export default InputField;
