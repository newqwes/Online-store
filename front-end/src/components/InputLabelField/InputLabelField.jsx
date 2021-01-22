import React from 'react';
import PropTypes from 'prop-types';

import ErrorLabel from '../ErrorLabel';

const InputLabelField = ({
  input,
  label,
  type,
  errorMessagePosition,
  meta: { touched, error, warning },
}) => (
  <>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type} />
    {touched &&
      ((error && <ErrorLabel text={error} justifyContent={errorMessagePosition} />) ||
        (warning && <ErrorLabel text={warning} justifyContent={errorMessagePosition} />))}
  </>
);

InputLabelField.propTypes = {
  errorMessagePosition: PropTypes.string.isRequired,
  input: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
};

export default InputLabelField;
