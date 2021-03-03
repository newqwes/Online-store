import {
  GET_AUTHORIZATION_SUCCESS,
  GET_AUTHORIZATION_FAILURE,
  USER_LOGOUT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
} from '../actions';

const initialState = {
  userData: {
    email: '',
    login: '',
    phone: '',
    token: '',
    type: '',
    apartment: '',
    home: '',
    street: '',
    city: '',
  },
  isSuccess: false,
  error: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_SUCCESS:
      return {
        userData: action.payload,
        isSuccess: true,
        error: initialState.error,
      };
    case UPDATE_USER_SUCCESS:
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
    case UPDATE_USER_FAILURE:
      return {
        userData: initialState.userData,
        isSuccess: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default user;
