import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { NavLink } from 'react-router-dom';

import LoginFormContent from './styled';

import Button from '../../Button';
import Flex from '../../Flex';
import InputField from '../InputField';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

class LoginForm extends React.Component {
  state = {
    isErrorAnimation: false,
  };

  onAnimationEnd = () => this.setState({ isErrorAnimation: false });

  handleClick = () => this.setState({ isErrorAnimation: true });

  render() {
    const { themeVariant, handleSubmit } = this.props;
    const { isErrorAnimation } = this.state;

    return (
      <LoginFormContent
        themeVariant={themeVariant}
        isErrorAnimation={isErrorAnimation}
        onAnimationEnd={this.onAnimationEnd}
      >
        <form onSubmit={handleSubmit}>
          <Field name='email' type='text' component={InputField} label='Ваша почта' />
          <Field name='password' type='password' component={InputField} label='Пароль' />
          <Button text='Войти' onClick={this.handleClick} />
          <Flex justifyContent={JUSTIFY_CONTENT.center}>
            <NavLink to='/registration'>Регистрация</NavLink>
          </Flex>
        </form>
      </LoginFormContent>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  themeVariant: PropTypes.string,
};

LoginForm.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default LoginForm;
