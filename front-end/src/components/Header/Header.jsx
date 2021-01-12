import React from 'react';
import PropTypes from 'prop-types';

import PAGE_WIDTH from '../../constants/pageWidth';
import THEME_VARIANT from '../../constants/themeVariant';
import { JUSTIFY_CONTENT } from '../../constants/position';
import FONT_SIZE from '../../constants/fontSize';
import ICON_SIZE from '../../constants/iconSize';

import { HeaderWrapper, HeaderContent } from './styled';

import Time from '../Icons/Time';
import Phone from '../Icons/Phone';
import Cart from '../Icons/Cart';
import Logo from '../Icons/Logo';
import Flex from '../Flex';
import Label from '../Label';
import Link from '../Link';
import Button from '../Button';

const Header = ({ pageWidth, themeVariant }) => (
  <HeaderWrapper themeVariant={themeVariant}>
    <HeaderContent pageWidth={pageWidth}>
      <Flex>
        <Link to='/'>
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
        <Link to='/cart'>
          <Cart size={ICON_SIZE.large} />
        </Link>
        <Button text='Войти' />
      </Flex>
    </HeaderContent>
  </HeaderWrapper>
);

Header.propTypes = {
  pageWidth: PropTypes.number,
  themeVariant: PropTypes.string,
};

Header.defaultProps = {
  pageWidth: PAGE_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default Header;
