import React, { Fragment } from 'react';

import ProductSection from './components/ProductSection';
import Header from './components/Header';
import Navbar from './components/Navbar';
import items from './mocks/items';
import products from './mocks/products';

const App = () => (
  <Fragment>
    <Header />
    <Navbar items={items} />
    <ProductSection products={products} />
  </Fragment>
);

export default App;
