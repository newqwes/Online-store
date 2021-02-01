import { takeEvery, put, all } from 'redux-saga/effects';

import { GET_PRODUCTS_LIST_PENDING } from '../actions';

import { productAPI } from '../api';
import { getProductsListSuccess } from '../actionCreators';

export function* getProductsList({ payload }) {
  const data = yield productAPI.getProductsList(payload);
  yield put(getProductsListSuccess(data));
}

export default function productSaga() {
  return all([takeEvery(GET_PRODUCTS_LIST_PENDING, getProductsList)]);
}
