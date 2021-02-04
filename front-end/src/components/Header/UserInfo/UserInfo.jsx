import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import Link from '../../Link';
import Button from '../../Button';

import ROUTER_PATH from '../../../constants/routerPath';
import THEME_VARIANT from '../../../constants/themeVariant';

const UserInfo = ({ logout, userName, isSuccess }) => {
  if (isSuccess) {
    return (
      <Fragment>
        <Link themeVariant={THEME_VARIANT.inverted} to={ROUTER_PATH.main}>
          {userName}
        </Link>
        <Button text='Выйти' onClick={logout} />
      </Fragment>
    );
  }

  return (
    <Link to={ROUTER_PATH.login}>
      <Button text='Войти' />
    </Link>
  );
};

UserInfo.propTypes = {
  themeVariant: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

UserInfo.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default UserInfo;
