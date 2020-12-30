import React from 'react';
import Menu from '../Menu';
import { HomeStyle, HomeWrapper } from './styled';

const items = [
  { id: 1, title: 'Пицца', link: '/1' },
  { id: 2, title: 'Курица', link: '/2' },
  { id: 3, title: 'Салаты', link: '/3' },
  { id: 4, title: 'Напитки', link: '/4' },
  { id: 5, title: 'Соусы', link: '/5' },
];

const Home = () => (
  <HomeStyle>
    <HomeWrapper>
      <Menu items={items} horizontally />
    </HomeWrapper>
  </HomeStyle>
);

export default Home;
