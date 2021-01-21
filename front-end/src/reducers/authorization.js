import { GET_AUTHORIZATION_SUCCESS } from '../actions';

const initialState = {
  token: '',
  isSuccess: false,
};

const authorization = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORIZATION_SUCCESS:
      return {
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authorization;
