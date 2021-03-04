import { GET_AUTHORIZATION_SUCCESS, GET_AUTHORIZATION_FAILURE, USER_LOGOUT } from '../actions';

const initialState = {
  isUserAuth: false,
  error: '',
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_SUCCESS:
      return {
        isUserAuth: true,
        error: initialState.error,
      };
    case GET_AUTHORIZATION_FAILURE:
      return {
        isUserAuth: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authorization;
