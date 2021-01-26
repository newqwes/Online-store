import { takeEvery, put, all } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from '../actionCreators';
import { GET_AUTHORIZATION_PENDING } from '../actions';
import { authAPI } from '../api';

export function* login({ payload }) {
  try {
    const token = yield authAPI.login(payload);

    yield put(loginSuccess(token));
    yield localStorage.setItem('token', token);
  } catch ({ response }) {
    yield put(loginFailure(response.data.message));
  }
}

export default () => all([takeEvery(GET_AUTHORIZATION_PENDING, login)]);
