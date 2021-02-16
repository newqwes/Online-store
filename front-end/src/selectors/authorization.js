import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('authorization');

const getUserData = createSelector(localState, get('userData'));

export const getEmailUser = createSelector(getUserData, get('email'));
export const getPhoneUser = createSelector(getUserData, get('phone'));
export const getLoginUser = createSelector(getUserData, get('login'));
