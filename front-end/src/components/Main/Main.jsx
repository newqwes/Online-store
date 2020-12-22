import React from 'react';
import MenuList from '../MenuList';
import { MainStyle, MainWrapper } from './styled';

const items = [
  { id: 1, title: 'Говядиной', link: '/1' },
  { id: 2, title: 'Курицей', link: '/2' },
  { id: 3, title: 'Грибами', link: '/3' },
  { id: 4, title: 'Салями', link: '/4' },
  { id: 5, title: 'Вегетарианская', link: '/5' },
  { id: 6, title: 'Остротая', link: '/6' },
  { id: 7, title: 'Сыром', link: '/7' },
];

const Main = () => (
  <MainStyle>
    <MainWrapper>
      <MenuList items={items} horizontally />
    </MainWrapper>
  </MainStyle>
);

export default Main;
