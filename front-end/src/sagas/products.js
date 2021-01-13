import { takeEvery, put, call, all } from 'redux-saga/effects';
import { getProductsListSuccess } from '../actionCreators';
import { GET_PRODUCTS_LIST_PENDING } from '../actions';
import products from '../mocks/products';

const delay = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(products);
    }, 1000)
  );

export function* getProductsList() {
  const data = yield call(delay);
  yield put(getProductsListSuccess(data));
}

export default function productSaga() {
  return all([takeEvery(GET_PRODUCTS_LIST_PENDING, getProductsList)]);
}
