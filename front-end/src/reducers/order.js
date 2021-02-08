import { CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE } from '../actions';

const initialState = {
  data: '',
  isSuccess: false,
  error: '',
};

const order = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_SUCCESS:
      return {
        data: action.payload,
        isSuccess: true,
        error: initialState.error,
      };
    case CREATE_ORDER_FAILURE:
      return {
        data: initialState.data,
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default order;
