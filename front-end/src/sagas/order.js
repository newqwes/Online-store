import { takeEvery, put, all } from 'redux-saga/effects';

import { SEND_ORDER_PENDING } from '../actions';

import { orderAPI } from '../api';
import { sendOrderFailure, sendOrderSuccess } from '../actionCreators';

function* sendOrder({ payload }) {
  try {
    const orderData = yield orderAPI.sendOrder(payload);

    yield put(sendOrderSuccess(orderData));
  } catch ({ response }) {
    yield put(sendOrderFailure(response.data.message));
  }
}

export default function orderSaga() {
  return all([takeEvery(SEND_ORDER_PENDING, sendOrder)]);
}
