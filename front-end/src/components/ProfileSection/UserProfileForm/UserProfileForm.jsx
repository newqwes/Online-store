import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Flex from '../../Flex';
import Label from '../../Label';
import InputField from '../../InputField';

import FONT_SIZE from '../../../constants/fontSize';
import DIRECTION from '../../../constants/direction';
import FONT_WEIGHT from '../../../constants/fontWeight';

import { InputFieldContent } from '../styled';

class UserProfileForm extends React.Component {
  static propTypes = {
    updateUser: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
  };

  render() {
    const { updateUser, handleSubmit, reset } = this.props;
    return (
      <Flex direction={DIRECTION.column}>
        <Label
          text='Личные данные'
          className='profile__label'
          fontSize={FONT_SIZE.large}
          fontWeight={FONT_WEIGHT.bold}
        />
        <form>
          <Field
            type='text'
            name='login'
            label='Имя'
            reset={reset}
            control={true}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='phone'
            reset={reset}
            label='Номер телефона'
            control={true}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
          <Field
            type='text'
            name='email'
            label='Почта'
            reset={reset}
            control={true}
            component={InputField}
            fieldStyle={InputFieldContent}
            submit={handleSubmit(updateUser)}
          />
        </form>
      </Flex>
    );
  }
}

export default UserProfileForm;
