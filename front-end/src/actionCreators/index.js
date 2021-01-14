import { GET_PRODUCTS_LIST_PENDING, GET_PRODUCTS_LIST_SUCCESS } from '../actions';

export const getProductsListPending = (type) => ({
  type: GET_PRODUCTS_LIST_PENDING,
  payload: type,
});

export const getProductsListSuccess = (data) => ({
  type: GET_PRODUCTS_LIST_SUCCESS,
  payload: data,
});
