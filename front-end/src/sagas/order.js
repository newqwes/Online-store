import { takeEvery, put, all } from 'redux-saga/effects';

import { CREATE_ORDER_PENDING } from '../actions';

import { orderAPI } from '../api';
import { orderFailure, orderSuccess } from '../actionCreators';

function* order({ payload }) {
  try {
    const orderData = yield orderAPI.order(payload);

    yield put(orderSuccess(orderData));
  } catch ({ response }) {
    yield put(orderFailure(response.data.message));
  }
}

export default function orderSaga() {
  return all([takeEvery(CREATE_ORDER_PENDING, order)]);
}
