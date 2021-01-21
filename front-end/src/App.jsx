import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ROUTER_PATH from './constants/routerPath.js';

import ProductsContainer from './containers/ProductsContainer';
import AuthorizationContainer from './containers/AuthorizationContainer';
import HeaderContainer from './containers/HeaderContainer';

import Navbar from './components/Navbar';

const App = () => (
  <Fragment>
    <HeaderContainer />
    <Navbar menuItems={ROUTER_PATH.navbar} />
    <Route exact path={ROUTER_PATH.main}>
      <Redirect to={ROUTER_PATH.products.pizza} />
    </Route>
    <Route path={ROUTER_PATH.products.main} component={ProductsContainer} />
    <Route path={ROUTER_PATH.login} component={AuthorizationContainer} />
  </Fragment>
);

export default App;
