import {
  GET_PRODUCTS_LIST_PENDING,
  GET_PRODUCTS_LIST_SUCCESS,
  ADD_TO_CART,
  GET_AUTHORIZATION_SUCCESS,
  GET_AUTHORIZATION_PENDING,
} from '../actions';

export const getProductsListPending = (type) => ({
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

export const getAuthorizationSuccess = (token) => ({
  type: GET_AUTHORIZATION_SUCCESS,
  payload: token,
});

export const getAuthorizationPending = (authorizationData) => ({
  type: GET_AUTHORIZATION_PENDING,
  payload: authorizationData,
});
