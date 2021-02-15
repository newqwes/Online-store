import { all } from 'redux-saga/effects';

import productSaga from './products';
import registrationSaga from './registration';
import authorizationSaga from './authorization';
import orderSaga from './order';

function* rootSaga() {
  yield all([productSaga(), authorizationSaga(), registrationSaga(), orderSaga()]);
}

export default rootSaga;
