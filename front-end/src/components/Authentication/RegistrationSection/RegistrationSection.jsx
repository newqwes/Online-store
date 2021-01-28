import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import { RegistrationWrapper, RegistrationForm } from './styled';

import Flex from '../../Flex';
import Label from '../../Label';
import Button from '../../Button';
import InputField from '../InputField';

import ROUTER_PATH from '../../../constants/routerPath';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';
import { INPUT_NAMES, INPUT_TYPES } from '../../../constants/input';

class RegistrationSection extends React.Component {
  render() {
    const { themeVariant } = this.props;

    return (
      <RegistrationWrapper themeVariant={themeVariant}>
        <Flex justifyContent={JUSTIFY_CONTENT.center}>
          <RegistrationForm themeVariant={themeVariant}>
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Label text='Регистрация' />
            </Flex>
            <form>
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
          </RegistrationForm>
        </Flex>
      </RegistrationWrapper>
    );
  }
}

RegistrationSection.propTypes = {
  themeVariant: PropTypes.string,
};

RegistrationSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default RegistrationSection;
