import React from 'react';
import { HeaderBackground, HeaderWrapper } from './styled';
import Logo from '../Logo';
import Phone from '../Icons/Phone';
import Time from '../Icons/Time';
import AlignmentWrapper from '../AlignmentWrapper';
import Label from '../Label';

const Header = () => (
  <HeaderBackground>
    <HeaderWrapper>
      <Logo href='/' />
      <AlignmentWrapper gap={10}>
        <Time />
        <Label text='Доставка в течении 30 минут' fontSize={2} />
      </AlignmentWrapper>
      <AlignmentWrapper gap={10}>
        <Phone />
        <Label text='+375 (33) 363-79-70' fontSize={2} />
      </AlignmentWrapper>
    </HeaderWrapper>
  </HeaderBackground>
);

export default Header;
