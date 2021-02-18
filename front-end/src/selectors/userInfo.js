import { get } from 'lodash/fp';
import { createSelector } from 'reselect';

const localState = get('authorization');

export const getUserData = createSelector(localState, get('userData'));
