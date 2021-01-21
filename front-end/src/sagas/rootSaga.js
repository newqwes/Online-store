import { all } from 'redux-saga/effects';
import productSaga from './products';
import authorizationSaga from './authorization';

function* rootSaga() {
  yield all([productSaga(), authorizationSaga()]);
}

export default rootSaga;
