import { all } from 'redux-saga/effects';

import productSaga from './products';
import registrationSaga from './registration';
import authorizationSaga from './authorization';

function* rootSaga() {
  yield all([productSaga(), authorizationSaga(), registrationSaga()]);
}

export default rootSaga;
