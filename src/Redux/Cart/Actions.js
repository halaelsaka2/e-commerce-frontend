import * as types from "../Types";

export function addToCartSuccess(data) {
  return { type: types.ADD_TO_CART, data };
}
export function deleteFromCartSuccess(data) {
  return { type: types.DELETE_FROM_CART, data };
}
export function removeCartFromStorageSuccess(data) {
  return { type: types.REMOVE_CART_FROM_STORAGE, data };
}


//thunk
export function addToCart(product) {
  return function (dispatch) {
    dispatch(addToCartSuccess(product));
  };
}
export function deleteFromCart(product) {
  return function (dispatch) {
    dispatch(deleteFromCartSuccess(product));
  };
}
export function removeCartFromStorage() {
  return function (dispatch) {
    dispatch(removeCartFromStorageSuccess());
  };
}
