import { GET_AUTHORIZATION_SUCCESS, GET_AUTHORIZATION_FAILURE, USER_LOGOUT } from '../actions';

const initialState = {
  userData: {
    email: '',
    login: '',
    tel: '',
    token: '',
    userType: 0,
  },
  isSuccess: false,
  error: '',
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_SUCCESS:
      return {
        userData: action.payload,
        isSuccess: true,
        error: initialState.error,
      };
    case GET_AUTHORIZATION_FAILURE:
      return {
        userData: initialState.userData,
        isSuccess: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {
        userData: initialState.userData,
        isSuccess: false,
        error: initialState.error,
      };
    default:
      return state;
  }
};

export default authorization;
