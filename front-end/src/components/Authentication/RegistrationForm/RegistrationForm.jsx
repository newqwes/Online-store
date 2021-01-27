import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import RegistrationFormContent from './styled';

import Button from '../../Button';
import Flex from '../../Flex';
import InputField from '../InputField';
import Label from '../../Label';

import THEME_VARIANT from '../../../constants/themeVariant';
import ROUTER_PATH from '../../../constants/routerPath';
import { INPUT_NAMES, INPUT_TYPES } from '../../../constants/input';
import { JUSTIFY_CONTENT } from '../../../constants/position';

class RegistrationForm extends React.Component {
  render() {
    const { themeVariant, handleSubmit } = this.props;

    return (
      <RegistrationFormContent themeVariant={themeVariant}>
        <Label text='Регистрация' />
        <form onSubmit={handleSubmit}>
          <Field
            name={INPUT_NAMES.login}
            type={INPUT_TYPES.text}
            component={InputField}
            label='Логин'
          />
          <Field
            name={INPUT_NAMES.email}
            type={INPUT_TYPES.text}
            component={InputField}
            label='Ваша почта'
          />
          <Field
            name={INPUT_NAMES.tel}
            type={INPUT_TYPES.tel}
            component={InputField}
            label='Телефон'
          />
          <Field
            name={INPUT_NAMES.password}
            type={INPUT_TYPES.password}
            component={InputField}
            label='Пароль'
          />
          <Field
            name={INPUT_NAMES.repassword}
            type={INPUT_TYPES.password}
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
