import * as types from "../Types";
import ProductService from "../../Api/Product";

export function getAllProductsSuccess(data) {
  return { type: types.GET_ALL_PRODUCTS, data };
}
function getProductsBySubIdSuccess(data) {
  return { type: types.GET_PRODUCTS_BY_SUB_ID, data };
}
function getProductByIdSuccess(data) {
  return { type: types.GET_PRODUCT_BY_ID, data };
}
function editProductSuccess(data) {
  return { type: types.EDIT_PRODUCT, data };
}
function addProductSuccess(data) {
  return { type: types.ADD_PRODUCT, data };
}

function deleteProductSuccess(data) {
  return { type: types.DELETE_PRODUCT, data };
}
//thunk
export function getAllProducts(page, subId) {
  return async function (dispatch) {
    const response = await ProductService.getAllProducts(page, subId);
    console.log(response.data);
    dispatch(getAllProductsSuccess(response.data));
  };
}

export function getProductsBySubId(subId) {
  return async function (dispatch) {
    const response = await ProductService.getProductsBySubId(subId);
    dispatch(getProductsBySubIdSuccess(response.data));
  };
}
export function getProductById(id) {
  return async function (dispatch) {
    const response = await ProductService.getProductById(id);
    dispatch(getProductByIdSuccess(response.data));
  };
}

export function editProduct(product) {
  return async function (dispatch) {
    try {
      const response = await ProductService.editProduct(product);
      dispatch(editProductSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
export function addProduct(product) {
  return async function (dispatch) {
    try {
      const response = await ProductService.addProduct(product);
      dispatch(addProductSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}

export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      const response = await ProductService.deleteProduct(id);
      dispatch(deleteProductSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
