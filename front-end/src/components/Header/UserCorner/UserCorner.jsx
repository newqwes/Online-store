import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Link from '../../Link';
import Button from '../../Button';

import THEME_VARIANT from '../../../constants/themeVariant';

const UserCorner = ({ logout, login, isSuccess }) => {
  if (isSuccess) {
    return (
      <Fragment>
        <Link themeVariant={THEME_VARIANT.inverted} to='/'>
          {login}
        </Link>
        <Button text='Выйти' onClick={logout} />
      </Fragment>
    );
  }
  return (
    <Link to='/login'>
      <Button text='Войти' />
    </Link>
  );
};

UserCorner.propTypes = {
  themeVariant: PropTypes.string,
  logout: PropTypes.func.isRequired,
  login: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

UserCorner.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default UserCorner;
