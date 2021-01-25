import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { LoginWrapper, LoginContent } from './styled';

import Button from '../../Button';
import Flex from '../../Flex';
import InputLabelField from '../../InputLabelField';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';

import {
  lengthValidation,
  emailValidation,
  requiredValidation,
} from '../../../utils/formValidation';

const maxLength = lengthValidation({ length: 30, messege: 'Не более 30 символов', toMore: true });
const minLength = lengthValidation({ length: 5, messege: 'Не менее 5 символов', toMore: false });
const requiredField = requiredValidation({ messege: 'Обязателен для заполнения' });
const emailField = emailValidation({ messege: 'Неверный формат email' });

class Login extends React.Component {
  state = {
    isErrorAnimation: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.flag !== prevProps.flag) {
      this.setState({ isErrorAnimation: true });
    }
  }

  onAnimationEnd = () => this.setState({ isErrorAnimation: false });

  render() {
    const { themeVariant, handleSubmit } = this.props;
    const { isErrorAnimation } = this.state;

    return (
      <LoginWrapper themeVariant={themeVariant}>
        <Flex justifyContent={JUSTIFY_CONTENT.center}>
          <LoginContent
            themeVariant={themeVariant}
            isErrorAnimation={isErrorAnimation}
            onAnimationEnd={this.onAnimationEnd}
          >
            <form onSubmit={handleSubmit}>
              <Field
                name='email'
                type='text'
                errorMessagePosition={JUSTIFY_CONTENT.center}
                component={InputLabelField}
                label='Ваша почта'
                validate={[requiredField, maxLength, minLength, emailField]}
              />
              <Field
                name='password'
                type='password'
                errorMessagePosition={JUSTIFY_CONTENT.center}
                component={InputLabelField}
                label='Пароль'
                validate={[requiredField, maxLength, minLength]}
              />
              <Button text='Войти' />
            </form>
          </LoginContent>
        </Flex>
      </LoginWrapper>
    );
  }
}

Login.propTypes = {
  flag: PropTypes.bool.isRequired,
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
