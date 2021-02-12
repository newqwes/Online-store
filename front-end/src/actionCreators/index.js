import {
  GET_PRODUCTS_LIST_PENDING,
  GET_PRODUCTS_LIST_SUCCESS,
  ADD_TO_CART,
  GET_AUTHORIZATION_SUCCESS,
  GET_AUTHORIZATION_PENDING,
  GET_AUTHORIZATION_FAILURE,
  GET_REGISTRATION_PENDING,
  USER_LOGOUT,
  REMOVE_FROM_CART,
  CREATE_ORDER_PENDING,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  RESET_ORDER,
} from '../actions';

export const getProductsList = (type) => ({
  type: GET_PRODUCTS_LIST_PENDING,
  payload: type,
});

export const getProductsListSuccess = (data) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: data,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const loginSuccess = (userData) => ({
  type: GET_AUTHORIZATION_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: GET_AUTHORIZATION_FAILURE,
  payload: error,
});

export const login = (authorizationData) => ({
  type: GET_AUTHORIZATION_PENDING,
  payload: authorizationData,
});

export const logout = () => ({
  type: USER_LOGOUT,
});

export const registration = (registrationData) => ({
  type: GET_REGISTRATION_PENDING,
  payload: registrationData,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const submitOrder = (order) => ({
  type: CREATE_ORDER_PENDING,
  payload: order,
});

export const orderSuccess = (orderData) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: orderData,
});

export const orderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error,
});

export const resetOrder = () => ({
  type: RESET_ORDER,
});
