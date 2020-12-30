import React from 'react';
import { HeaderStyle, HeaderWrapper } from './styled';
import Time from '../Icons/Time';
import Phone from '../Icons/Phone';
import Cart from '../Icons/Cart';
import Logo from '../Icons/Logo';
import Alignment from '../Alignment';
import Label from '../Label';
import Link from '../Link';
import Button from '../Button';
import { HORIZONTAL } from '../../constants/POSITION';
import FONT_SIZE from '../../constants/FONT_SIZE';
import ICON_SIZE from '../../constants/ICON_SIZE';

const Header = () => (
  <HeaderStyle>
    <HeaderWrapper>
      <Alignment>
        <Link href='/' isNavLink>
          <Logo size={ICON_SIZE.large} />
        </Link>
      </Alignment>
      <Alignment>
        <Time />
        <Label text='30 минут доставка' fontSize={FONT_SIZE.medium} />
      </Alignment>
      <Alignment>
        <Phone />
        <Link href='tel:+375333637970' fontSize={FONT_SIZE.medium}>
          +375 (33) 363-79-70
        </Link>
      </Alignment>
      <Alignment horizontal={HORIZONTAL.right} gap={50}>
        <Link href='/cart' isNavLink>
          <Cart size={ICON_SIZE.large} />
        </Link>
        <Button text='Войти' />
      </Alignment>
    </HeaderWrapper>
  </HeaderStyle>
);

export default Header;
