import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import Flex from '../../Flex';
import Label from '../../Label';
import Button from '../../Button';
import InputField from '../InputField';

import { LoginWrapper, LoginForm } from './styled';

import ROUTER_PATH from '../../../constants/routerPath';
import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';
import { INPUT_NAMES, INPUT_TYPES } from '../../../constants/input';

class LoginSection extends React.Component {
  state = {
    isErrorAnimation: false,
  };

  onAnimationEnd = () => this.setState({ isErrorAnimation: false });

  handleClick = () => this.setState({ isErrorAnimation: true });

  render() {
    const { themeVariant, login, handleSubmit } = this.props;
    const { isErrorAnimation } = this.state;

    const onSubmit = handleSubmit(login);

    return (
      <LoginWrapper themeVariant={themeVariant}>
        <Flex justifyContent={JUSTIFY_CONTENT.center}>
          <LoginForm
            themeVariant={themeVariant}
            isErrorAnimation={isErrorAnimation}
            onAnimationEnd={this.onAnimationEnd}
          >
            <Flex justifyContent={JUSTIFY_CONTENT.center}>
              <Label text='Авторизация' />
            </Flex>
            <form onSubmit={onSubmit}>
              <Field
                name={INPUT_NAMES.email}
                type={INPUT_TYPES.text}
                component={InputField}
                label='Ваша почта'
              />
              <Field
                name={INPUT_NAMES.password}
                type={INPUT_TYPES.password}
                component={InputField}
                label='Пароль'
              />
              <Button text='Войти' onClick={this.handleClick} />
              <Flex justifyContent={JUSTIFY_CONTENT.center}>
                <NavLink to={ROUTER_PATH.registration}>Регистрация</NavLink>
              </Flex>
            </form>
          </LoginForm>
        </Flex>
      </LoginWrapper>
    );
  }
}

LoginSection.propTypes = {
  login: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  themeVariant: PropTypes.string,
};

LoginSection.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default LoginSection;
