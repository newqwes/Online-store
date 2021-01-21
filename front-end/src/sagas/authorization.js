import { takeEvery, put, all } from 'redux-saga/effects';
import { loginSuccess } from '../actionCreators';
import { GET_AUTHORIZATION_PENDING } from '../actions';
import { authAPI } from '../api';

export function* login({ payload }) {
  const token = yield authAPI.login(payload);
  yield put(loginSuccess(token));
  yield localStorage.setItem('token', token);
}

export default function authorizationSaga() {
  return all([takeEvery(GET_AUTHORIZATION_PENDING, login)]);
}
