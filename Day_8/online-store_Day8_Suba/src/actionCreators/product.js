import {
  GET_PRODUCTS,
  SEARCH,
  ADD_CART,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  ADD_CART_SUCCESS,
  ADD_CART_FAILURE,
  CART_DELETE
} from "../actionTypes/product";

export function getProduct() {
  return {
    type: GET_PRODUCTS
  };
}
export function getProductSuccess(product) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    product
  };
}
export function getProductFailure(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}
export function Search(searchitem) {
  return {
    type: SEARCH,
    searchitem
  };
}
export function addCart(cartproduct) {
  return {
    type: ADD_CART,
    cartproduct
  };
}

export function CartDelete(product) {
  return {
    type: CART_DELETE,
    product
  };
}
export function addCartSuccess(product) {
  return {
    type: ADD_CART_SUCCESS,
    product
  };
}
export function addCartFailure(error) {
  return {
    type: ADD_CART_FAILURE
  };
}
