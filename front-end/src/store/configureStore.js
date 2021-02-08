import logger from 'redux-logger';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import cart from '../reducers/cart';
import rootSaga from '../sagas/rootSaga';
import products from '../reducers/products';
import authorization from '../reducers/authorization';
import order from '../reducers/order';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  products,
  cart,
  authorization,
  order,
  form,
});

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
