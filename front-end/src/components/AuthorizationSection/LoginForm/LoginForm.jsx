import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { LoginWrapper, LoginContent } from './styled';

import Button from '../../Button';
import Flex from '../../Flex';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

const Login = ({ handleSubmit, themeVariant }) => (
  <LoginWrapper themeVariant={themeVariant}>
    <Flex justifyContent={JUSTIFY_CONTENT.center}>
      <LoginContent themeVariant={themeVariant}>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Ваша почта</label>
          <Field name='email' component='input' type='email' />
          <label htmlFor='password'>Пароль</label>
          <Field name='password' component='input' type='password' />
          <Button text='Войти' />
        </form>
      </LoginContent>
    </Flex>
  </LoginWrapper>
);

Login.propTypes = {
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
