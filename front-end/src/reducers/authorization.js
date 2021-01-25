import { GET_AUTHORIZATION_SUCCESS, GET_AUTHORIZATION_FAILURE } from '../actions';

const initialState = {
  token: '',
  isSuccess: false,
  error: '',
  flag: false,
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_SUCCESS:
      return {
        token: action.payload,
        isSuccess: true,
        error: '',
        flag: state.flag,
      };
    case GET_AUTHORIZATION_FAILURE:
      return {
        token: '',
        isSuccess: false,
        error: action.payload,
        flag: !state.flag,
      };
    default:
      return state;
  }
};

export default authorization;
