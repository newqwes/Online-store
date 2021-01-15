import React from 'react';
import PropTypes from 'prop-types';

import SECTION_WIDTH from '../../constants/sectionWidth';
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

const Header = ({ maxHeaderWidth, themeVariant }) => (
  <HeaderWrapper themeVariant={themeVariant}>
    <HeaderContent maxHeaderWidth={maxHeaderWidth}>
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
        <Link to='/login'>
          <Button text='Войти' />
        </Link>
      </Flex>
    </HeaderContent>
  </HeaderWrapper>
);

Header.propTypes = {
  maxHeaderWidth: PropTypes.number,
  themeVariant: PropTypes.string,
};

Header.defaultProps = {
  maxHeaderWidth: SECTION_WIDTH.midle,
  themeVariant: THEME_VARIANT.default,
};

export default Header;
