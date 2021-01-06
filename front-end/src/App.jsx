import React, { Fragment } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';

const items = [
  { id: 1, title: 'Пицца', link: '/1' },
  { id: 2, title: 'Курица', link: '/2' },
  { id: 3, title: 'Салаты', link: '/3' },
  { id: 4, title: 'Напитки', link: '/4' },
  { id: 5, title: 'Соусы', link: '/5' },
  { id: 6, title: 'Контакты', link: '/contacts' },
];

const App = () => (
  <Fragment>
    <Header />
    <Navbar items={items} />
  </Fragment>
);

export default App;
