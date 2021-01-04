import React from 'react';
import { HeaderStyle, HeaderWrapper } from './styled';
import Time from '../Icons/Time';
import Phone from '../Icons/Phone';
import Cart from '../Icons/Cart';
import Logo from '../Icons/Logo';
import Alignment from '../Alignment';
import Label from '../Label';
import MyLink from '../Link';
import Button from '../Button';
import { HORIZONTAL } from '../../constants/position';
import FONT_SIZE from '../../constants/fontSize';
import ICON_SIZE from '../../constants/iconSize';
import GAP from '../../constants/gap';

const Header = () => (
  <HeaderStyle>
    <HeaderWrapper>
      <Alignment>
        <MyLink href='/' isNavLink>
          <Logo size={ICON_SIZE.large} />
        </MyLink>
      </Alignment>
      <Alignment>
        <Time />
        <Label text='30 минут доставка' fontSize={FONT_SIZE.medium} />
      </Alignment>
      <Alignment>
        <Phone />
        <MyLink href='tel:+375333637970' fontSize={FONT_SIZE.medium}>
          +375 (33) 363-79-70
        </MyLink>
      </Alignment>
      <Alignment horizontal={HORIZONTAL.right} childrenMarginRight={GAP.large}>
        <MyLink href='/cart' isNavLink>
          <Cart size={ICON_SIZE.large} />
        </MyLink>
        <Button text='Войти' />
      </Alignment>
    </HeaderWrapper>
  </HeaderStyle>
);

export default Header;
