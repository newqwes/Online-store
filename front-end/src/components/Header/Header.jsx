import React from 'react';
import { HeaderBackground, HeaderWrapper } from './styled';
import Logo from '../Logo';
import Phone from '../Icons/Phone';
import Time from '../Icons/Time';
import AlignmentWrapper from '../AlignmentWrapper';
import Label from '../Label';
import Button from '../Button';

const color = { primary: 'primary', secondary: 'secondary' };

const Header = () => (
  <HeaderBackground>
    <HeaderWrapper>
      <Logo href='/' />
      <AlignmentWrapper>
        <Time />
        <Label text='30 минут доставка' fontSize={2.2} />
      </AlignmentWrapper>
      <AlignmentWrapper>
        <Phone />
        <Label text='+375 (33) 363-79-70' fontSize={2.2} />
      </AlignmentWrapper>
      <AlignmentWrapper>
        <Button text='Войти' color={color.primary} onClick={() => console.log('Войти')} />
      </AlignmentWrapper>
    </HeaderWrapper>
  </HeaderBackground>
);

export default Header;
