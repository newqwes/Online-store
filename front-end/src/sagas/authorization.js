import { takeEvery, put, all } from 'redux-saga/effects';

import { GET_AUTHORIZATION_PENDING } from '../actions';

import { authAPI } from '../api';
import {
  loginSuccess,
  loginFailure,
  getUserDataSuccess,
  getUserDataFailure,
} from '../actionCreators';

function* authorization({ payload }) {
  try {
    const userData = yield authAPI.login(payload);

    yield put(loginSuccess());
    yield put(getUserDataSuccess(userData));
  } catch ({ response }) {
    yield put(loginFailure(response.data.message));
    yield put(getUserDataFailure(response.data.message));
  }
}

export default function authorizationSaga() {
  return all([takeEvery(GET_AUTHORIZATION_PENDING, authorization)]);
}
