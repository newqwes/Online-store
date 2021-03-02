import { takeEvery, put, all } from 'redux-saga/effects';

import { GET_REGISTRATION_PENDING } from '../actions';

import { authAPI } from '../api';
import { loginSuccess, loginFailure } from '../actionCreators';

export function* registration({ payload: { login, password, email, phone } }) {
  try {
    const userData = yield authAPI.registration({ login, password, email, phone });

    yield put(loginSuccess(userData));
  } catch ({ response }) {
    yield put(loginFailure(response.data.message));
  }
}

export default function registrationSaga() {
  return all([takeEvery(GET_REGISTRATION_PENDING, registration)]);
}
