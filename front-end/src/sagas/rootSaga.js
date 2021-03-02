import { all } from 'redux-saga/effects';

import productSaga from './products';
import registrationSaga from './registration';
import authorizationSaga from './authorization';
import orderSaga from './order';
import userSaga from './user';

function* rootSaga() {
  yield all([productSaga(), authorizationSaga(), registrationSaga(), orderSaga(), userSaga()]);
}

export default rootSaga;
