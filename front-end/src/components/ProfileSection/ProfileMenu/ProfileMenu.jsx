import React from 'react';
import PropTypes from 'prop-types';

import Сross from '../../Icons/Сross';
import Hamburger from '../../Icons/Hamburger';

import THEME_VARIANT from '../../../constants/themeVariant';

import { ProfileMenuWrapper, HamburgerWrapper } from './styled';

const ProfileMenu = ({
  themeVariant,
  className,
  toProfile,
  toAddress,
  toHistory,
  active,
  clickButtonMenu,
  profile,
  address,
  history,
}) => (
  <ProfileMenuWrapper themeVariant={themeVariant} className={className} active={active}>
    <HamburgerWrapper onClick={clickButtonMenu} themeVariant={themeVariant}>
      {active ? <Сross /> : <Hamburger />}
    </HamburgerWrapper>

    <ul>
      <li onClick={toProfile} className={profile ? 'active' : 'disable'}>
        Профиль
      </li>
      <li onClick={toAddress} className={address ? 'active' : 'disable'}>
        Адрес
      </li>
      <li onClick={toHistory} className={history ? 'active' : 'disable'}>
        История
      </li>
    </ul>
  </ProfileMenuWrapper>
);

ProfileMenu.propTypes = {
  themeVariant: PropTypes.string,
  className: PropTypes.string,
  toProfile: PropTypes.func.isRequired,
  toAddress: PropTypes.func.isRequired,
  toHistory: PropTypes.func.isRequired,
  clickButtonMenu: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  profile: PropTypes.bool.isRequired,
  address: PropTypes.bool.isRequired,
  history: PropTypes.bool.isRequired,
};

ProfileMenu.defaultProps = {
  themeVariant: THEME_VARIANT.default,
  className: '',
};

export default ProfileMenu;
