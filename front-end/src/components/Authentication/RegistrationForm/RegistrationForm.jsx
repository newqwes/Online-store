import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import RegistrationFormContent from './styled';

import Button from '../../Button';
import Flex from '../../Flex';
import InputField from '../InputField';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';
import ROUTER_PATH from '../../../constants/routerPath';
import Label from '../../Label';

class RegistrationForm extends React.Component {
  render() {
    const { themeVariant, handleSubmit } = this.props;

    return (
      <RegistrationFormContent themeVariant={themeVariant}>
      <Label text='Регистрация'/>
        <form onSubmit={handleSubmit}>
          <Field name='login' type='text' component={InputField} label='Логин' />
          <Field name='email' type='text' component={InputField} label='Ваша почта' />
          <Field name='tel' type='tel' component={InputField} label='Телефон' />
          <Field name='password' type='password' component={InputField} label='Пароль' />
          <Field
            name='repassword'
            type='repassword'
            component={InputField}
            label='Повторите пароль'
          />
          <Button text='Регистрация' />
          <Flex justifyContent={JUSTIFY_CONTENT.center}>
            <NavLink to={ROUTER_PATH.login}>Войти</NavLink>
          </Flex>
        </form>
      </RegistrationFormContent>
    );
  }
}

RegistrationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  themeVariant: PropTypes.string,
};

RegistrationForm.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default RegistrationForm;
