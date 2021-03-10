import { takeEvery, put, all, call } from 'redux-saga/effects';

import { UPDATE_USER_PENDING } from '../actions';

import { userAPI } from '../api';
import { updateUserSuccess, updateUserFailure } from '../actionCreators';

export function* updateUser({ payload }) {
  try {
    const userData = yield call(userAPI.update, payload);

    yield put(updateUserSuccess(userData));
  } catch ({ response }) {
    yield put(updateUserFailure(response.data.message));
  }
}

export default function userSaga() {
  return all([takeEvery(UPDATE_USER_PENDING, updateUser)]);
}
