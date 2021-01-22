import { takeEvery, put, all } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actionCreators';
import { GET_AUTHORIZATION_PENDING } from '../actions';
import { authAPI } from '../api';

const getError = (actionCreator, error) => actionCreator(error.response.data.message);

export function* login({ payload }) {
  try {
    const token = yield authAPI.login(payload);
    yield put(loginSuccess(token));
    yield localStorage.setItem('token', token);
  } catch (error) {
    yield put(getError(loginFailure, error));
  }
}

export default function authorizationSaga() {
  return all([takeEvery(GET_AUTHORIZATION_PENDING, login)]);
}
