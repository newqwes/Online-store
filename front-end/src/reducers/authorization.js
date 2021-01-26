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
        error: '',
      };
    case GET_AUTHORIZATION_FAILURE:
      return {
        token: '',
        isSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authorization;
