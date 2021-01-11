import React, { Fragment } from 'react';

import ProductSection from './components/ProductSection';
import Header from './components/Header';
import Navbar from './components/Navbar';
import navbarMenuItems from './mocks/navbarMenuItems';
import products from './mocks/products';

const App = () => (
  <Fragment>
    <Header />
    <Navbar navbarMenuItems={navbarMenuItems} />
    <ProductSection products={products} />
  </Fragment>
);

export default App;
