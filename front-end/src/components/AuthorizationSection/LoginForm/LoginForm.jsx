import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { LoginWrapper, LoginContent } from './styled';

import Button from '../../Button';
import Flex from '../../Flex';
import InputLabelField from '../../InputLabelField';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import { maxLength, minLength, emailValidate, requiredField } from '../../../utils/formValidation';

const maxLength30 = maxLength(30);
const minLength5 = minLength(5);

const Login = ({ themeVariant, handleSubmit, isSuccess }) => {
  const [shadowAlert, setShadowAlert] = useState();
  const setShadowHandler = () => {
    if (isSuccess) setShadowAlert('success');
    else setShadowAlert('error');
  };

  return (
    <LoginWrapper themeVariant={themeVariant}>
      <Flex justifyContent={JUSTIFY_CONTENT.center}>
        <LoginContent themeVariant={themeVariant} shadowAlert={shadowAlert}>
          <form onSubmit={handleSubmit}>
            <Field
              name='email'
              type='text'
              errorMessagePosition={JUSTIFY_CONTENT.center}
              component={InputLabelField}
              label='Ваша почта'
              validate={[requiredField, maxLength30, minLength5, emailValidate]}
            />
            <Field
              name='password'
              type='password'
              errorMessagePosition={JUSTIFY_CONTENT.center}
              component={InputLabelField}
              label='Пароль'
              validate={[requiredField, maxLength30, minLength5]}
            />
            <Button text='Войти' onClick={setShadowHandler} />
          </form>
        </LoginContent>
      </Flex>
    </LoginWrapper>
  );
};

Login.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  themeVariant: PropTypes.string,
};

Login.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

const LoginForm = reduxForm({
  form: 'login',
})(Login);

export default LoginForm;
