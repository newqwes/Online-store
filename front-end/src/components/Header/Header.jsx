import React from 'react';
import PropTypes from 'prop-types';

import ICON_SIZE from '../../constants/iconSize';
import FONT_SIZE from '../../constants/fontSize';
import ROUTER_PATH from '../../constants/routerPath';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';

import Flex from '../Flex';
import Link from '../Link';
import Label from '../Label';
import Time from '../Icons/Time';
import Cart from '../Icons/Cart';
import Logo from '../Icons/Logo';
import UserInfo from './UserInfo';
import Phone from '../Icons/Phone';

import { HeaderWrapper, HeaderContent } from './styled';

const Header = ({ cartItemsCount, themeVariant, isSuccess, userName, logout }) => (
  <HeaderWrapper themeVariant={themeVariant}>
    <HeaderContent>
      <Flex>
        <Link to={ROUTER_PATH.main}>
          <Logo size={ICON_SIZE.large} />
        </Link>
      </Flex>
      <Flex>
        <Time />
        <Label
          themeVariant={THEME_VARIANT.inverted}
          text='30 минут доставка'
          fontSize={FONT_SIZE.large}
        />
      </Flex>
      <Flex>
        <Phone />
        <Link themeVariant={THEME_VARIANT.inverted} href='tel:+375333637970'>
          +375 (33) 363-79-70
        </Link>
      </Flex>
      <Flex horizontal={JUSTIFY_CONTENT.flexEnd}>
        <Link to={ROUTER_PATH.cart}>
          <Cart size={ICON_SIZE.large} cartItemsCount={cartItemsCount} />
        </Link>
        <UserInfo userName={userName} logout={logout} isSuccess={isSuccess} />
      </Flex>
    </HeaderContent>
  </HeaderWrapper>
);

Header.propTypes = {
  themeVariant: PropTypes.string,
  logout: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  cartItemsCount: PropTypes.number.isRequired,
};

Header.defaultProps = {
  themeVariant: THEME_VARIANT.default,
};

export default Header;
