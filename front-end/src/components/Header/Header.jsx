import React from 'react';
import PropTypes from 'prop-types';

import PAGE_WIDTH from '../../constants/pageWidth';
import HEADER_HEIGHT from '../../constants/header';
import { HORIZONTAL } from '../../constants/position';
import FONT_SIZE from '../../constants/fontSize';
import ICON_SIZE from '../../constants/iconSize';
import THEME_VARIANT from '../../constants/themevariant';

import { HeaderWrapper, HeaderContent, otherstyles } from './styled';

import Time from '../Icons/Time';
import Phone from '../Icons/Phone';
import Cart from '../Icons/Cart';
import Logo from '../Icons/Logo';
import Alignment from '../Alignment';
import Label from '../Label';
import Link from '../Link';
import Button from '../Button';

const Header = ({ pageWidth, headerHeight, themevariant }) => (
  <HeaderWrapper headerHeight={headerHeight} themevariant={themevariant}>
    <HeaderContent pageWidth={pageWidth}>
      <Alignment>
        <Link to='/'>
          <Logo size={ICON_SIZE.large} />
        </Link>
      </Alignment>
      <Alignment>
        <Time />
        <Label
          otherstyles={otherstyles}
          themevariant={THEME_VARIANT.inverted}
          text='30 минут доставка'
          fontSize={FONT_SIZE.medium}
        />
      </Alignment>
      <Alignment>
        <Phone />
        <Link
          otherstyles={otherstyles}
          themevariant={THEME_VARIANT.inverted}
          href='tel:+375333637970'
          fontSize={FONT_SIZE.medium}
        >
          +375 (33) 363-79-70
        </Link>
      </Alignment>
      <Alignment horizontal={HORIZONTAL.right}>
        <Link to='/cart'>
          <Cart size={ICON_SIZE.large} />
        </Link>
        <Button text='Войти' otherstyles={otherstyles} />
      </Alignment>
    </HeaderContent>
  </HeaderWrapper>
);

Header.propTypes = {
  pageWidth: PropTypes.number,
  headerHeight: PropTypes.number,
  themevariant: PropTypes.string,
};

Header.defaultProps = {
  pageWidth: PAGE_WIDTH.midle,
  headerHeight: HEADER_HEIGHT.default,
  themevariant: THEME_VARIANT.default,
};

export default Header;
