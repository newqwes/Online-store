import { takeEvery, put, all } from 'redux-saga/effects';

import { GET_AUTHORIZATION_PENDING } from '../actions';

import { authAPI } from '../api';
import { loginSuccess, loginFailure } from '../actionCreators';

function* authorization({ payload }) {
  try {
    const userData = yield authAPI.login(payload);

    yield put(loginSuccess(userData));
    yield localStorage.setItem('token', userData.token);
  } catch ({ response }) {
    yield put(loginFailure(response.data.message));
  }
}

export default function authorizationSaga() {
  return all([takeEvery(GET_AUTHORIZATION_PENDING, authorization)]);
}
