import React, { Fragment } from 'react';

import { Route } from 'react-router-dom';
import ProductsContainer from './Containers/ProductsContainer.jsx';

import Header from './components/Header';
import Navbar from './components/Navbar';
import menuItems from './mocks/menuItems';

const App = () => (
  <Fragment>
    <Header />
    <Navbar menuItems={menuItems} />
    <Route path='/products' component={ProductsContainer} />
  </Fragment>
);

export default App;
