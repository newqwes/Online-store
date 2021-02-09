import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';

import ROUTER_PATH from './constants/routerPath';
import AUTHENTICATION from './constants/authentication';

import Navbar from './components/Navbar';
import CartContainer from './containers/CartContainer';
import LoginContainer from './containers/LoginContainer';
import HeaderContainer from './containers/HeaderContainer';
import OrderContainer from './containers/OrderContainer';
import ProductsContainer from './containers/ProductsContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import OrderMessageContainer from './containers/OrderMessageContainer';

const App = () => (
  <Fragment>
    <HeaderContainer />
    <Navbar menuItems={ROUTER_PATH.navbar} />
    <Route exact path={ROUTER_PATH.main}>
      <Redirect to={ROUTER_PATH.products.pizza} />
    </Route>
    <Route path={ROUTER_PATH.products.main} component={ProductsContainer} />
    <Route path={ROUTER_PATH.cart} component={CartContainer} />
    <Route path={ROUTER_PATH.order} component={OrderContainer} />
    <Route path={ROUTER_PATH.login}>
      <LoginContainer content={AUTHENTICATION.login} />
    </Route>
    <Route path={ROUTER_PATH.registration}>
      <RegistrationContainer content={AUTHENTICATION.registration} />
    </Route>
    <Route path={ROUTER_PATH.orderSuccess} component={OrderMessageContainer} />
  </Fragment>
);

export default App;
