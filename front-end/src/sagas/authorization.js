import { takeEvery, put, all } from 'redux-saga/effects';
import { getAuthorizationSuccess } from '../actionCreators';
import { GET_AUTHORIZATION_PENDING } from '../actions';
import { authAPI } from '../api';

export function* getAuthorization({ payload }) {
  const { status, message, token } = yield authAPI.login(payload);
  console.log(status, message);
  yield put(getAuthorizationSuccess(token));
}

export default function authorizationSaga() {
  return all([takeEvery(GET_AUTHORIZATION_PENDING, getAuthorization)]);
}
