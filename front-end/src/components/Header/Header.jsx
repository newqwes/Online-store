import React from 'react';
import { HeaderBackground, HeaderWrapper } from './styled';
import Logo from '../Logo';
import Icons from '../Icons';
import Alignment from '../Alignment';
import Label from '../Label';
import Button from '../Button';
import fontSize from '../../constants/fontSize';

const color = { primary: 'primary', secondary: 'secondary' };

const Header = () => {
  const handleClick = () => console.log('Войти');

  return (
    <HeaderBackground>
      <HeaderWrapper>
        <Logo href='/' />
        <Alignment>
          <Icons.Time />
          <Label text='30 минут доставка' fontSize={fontSize.medium} />
        </Alignment>
        <Alignment>
          <Icons.Phone />
          <Label text='+375 (33) 363-79-70' fontSize={fontSize.medium} />
        </Alignment>
        <Alignment>
          <Button text='Войти' color={color.primary} onClick={handleClick} />
        </Alignment>
      </HeaderWrapper>
    </HeaderBackground>
  );
};

export default Header;
