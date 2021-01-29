import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ROUTER_PATH from './constants/routerPath';
import AUTHENTICATION from './constants/authentication';

import ProductsContainer from './containers/ProductsContainer';
import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';
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
    <Route path={ROUTER_PATH.login}>
      <LoginContainer content={AUTHENTICATION.login} />
    </Route>
    <Route path={ROUTER_PATH.registration}>
      <RegistrationContainer content={AUTHENTICATION.registration} />
    </Route>
  </Fragment>
);

export default App;
