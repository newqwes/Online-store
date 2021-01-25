import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { LoginWrapper, LoginContent } from './styled';

import Button from '../../Button';
import Flex from '../../Flex';
import InputLabelField from '../../InputLabelField';

import THEME_VARIANT from '../../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../../constants/position';
import validate from './validate';

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
              />
              <Field
                name='password'
                type='password'
                errorMessagePosition={JUSTIFY_CONTENT.center}
                component={InputLabelField}
                label='Пароль'
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
  validate,
})(Login);

export default LoginForm;
