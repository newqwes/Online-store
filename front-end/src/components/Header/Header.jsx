import React from 'react';
import { HeaderStyle, HeaderWrapper } from './styled';
import Logo from '../Logo';
import Icons from '../Icons';
import Alignment from '../Alignment';
import Label from '../Label';
import Link from '../Link';
import Button from '../Button';
import { positionX, positionY } from '../../constants/position';
import fontSize from '../../constants/fontSize';
import color from '../../constants/color';
import iconSize from '../../constants/iconSize';

const Header = () => (
  <HeaderStyle>
    <HeaderWrapper>
      <Logo href='/' position={positionY.center} />
      <Alignment>
        <Icons.Time />
        <Label text='30 минут доставка' fontSize={fontSize.medium} />
      </Alignment>
      <Alignment>
        <Icons.Phone />
        <Link
          href='tel:+375333637970'
          fontSize={fontSize.medium}
          text='+375 (33) 363-79-70'
          usual
        />
      </Alignment>
      <Alignment positionX={positionX.right} gap='50'>
        <Link href='/cart'>
          <Icons.Cart size={iconSize.large} />
        </Link>
        <Button text='Войти' color={color.primary} />
      </Alignment>
    </HeaderWrapper>
  </HeaderStyle>
);

export default Header;
