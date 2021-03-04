import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('user');

export const getUserData = createSelector(localState, get('data'));

export const getUserName = createSelector(getUserData, get('login'));
