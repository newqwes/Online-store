import React from 'react';
import { HeaderStyle, HeaderWrapper } from './styled';
import Logo from '../Logo';
import Phone from '../Icons/Phone';
import Time from '../Icons/Time';
import HeaderTitle from '../HeaderTitle';

const Header = () => (
  <HeaderStyle>
    <HeaderWrapper>
      <Logo href='/' />
      <HeaderTitle icon={Time} title='30 минут доставка' />
      <HeaderTitle icon={Phone} title='+375 (33) 363-79-70' />
    </HeaderWrapper>
  </HeaderStyle>
);

export default Header;
