import { GET_PRODUCTS_LIST_PENDING, GET_PRODUCTS_LIST_SUCCESS, ADD_TO_CART } from '../actions';

export const getProductsListPending = (type) => ({
  type: GET_PRODUCTS_LIST_PENDING,
  payload: type,
});

export const getProductsListSuccess = (data) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: data,
});

export const addToCartAC = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});
