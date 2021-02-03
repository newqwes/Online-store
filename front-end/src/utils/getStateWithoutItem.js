import { cloneDeep } from 'lodash';

const getStateWithoutItem = (state, index) => {
  const cloneState = cloneDeep(state);

  cloneState.splice(index, 1);
  return cloneState;
};

export default getStateWithoutItem;
