import React from 'react';
import { HeaderBackground, HeaderWrapper } from './styled';
import Logo from '../Logo';
import Phone from '../Icons/Phone';
import Time from '../Icons/Time';
import AlignmentWrapper from '../AlignmentWrapper';
import Title from '../Title';

const Header = () => (
  <HeaderBackground>
    <HeaderWrapper>
      <Logo href='/' />
      <AlignmentWrapper gap={10}>
        <Time />
        <Title text='Доставка в течении 30 минут' color='#fff' fontSize={2} tag='h3' />
      </AlignmentWrapper>
      <AlignmentWrapper gap={10}>
        <Phone />
        <Title text='+375 (33) 363-79-70' color='#fff' fontSize={2} tag='h3' />
      </AlignmentWrapper>
    </HeaderWrapper>
  </HeaderBackground>
);

export default Header;
