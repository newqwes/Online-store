import { GET_AUTHORIZATION_SUCCESS, GET_AUTHORIZATION_FAILURE } from '../actions';

const initialState = {
  token: '',
  isSuccess: false,
  error: '',
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_SUCCESS:
      return {
        token: action.payload,
        isSuccess: true,
      };
    case GET_AUTHORIZATION_FAILURE:
      return {
        error: action.payload,
        isSuccess: false,
      };
    default:
      return state;
  }
};

export default authorization;
