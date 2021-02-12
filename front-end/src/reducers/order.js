import { CREATE_ORDER_SUCCESS, CREATE_ORDER_FAILURE, RESET_ORDER } from '../actions';

const initialState = {
  data: {
    cart: [
      {
        id: null,
        type: '',
        name: '',
        description: '',
        photoUrl: '',
        unitSign: '',
        currencySign: '',
        options: [
          {
            id: null,
            price: null,
            weight: null,
            product_id: null,
          },
        ],
        count: null,
      },
    ],
    customer: {
      email: '',
      photo: '',
      city: '',
      street: '',
      home: '',
      apartment: '',
    },
  },
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
    case RESET_ORDER:
      return initialState;
    default:
      return state;
  }
};

export default order;
