import * as types from "../Types";
import SubCategoryService from "../../Api/SubCategory";

export function getAllSubCategorySuccess(data) {
  return { type: types.GET_ALL_SUB_CATEGORY, data };
}
export function addSubCatSuccess(data) {
  return { type: types.ADD_SUB_CATEGORY, data };
}
export function editSubCatSuccess(data) {
  return { type: types.Edit_SUB_CATEGORY, data };
}
export function deleteSubCatSuccess(data) {
  return { type: types.DELETE_SUB_CATEGORY, data };
}

export function getAllSubCategory() {
  return async function (dispatch) {
    const response = await SubCategoryService.getAllSubCategories();
    dispatch(getAllSubCategorySuccess(response.data));
  };
}

export function addSubCat(subCategory) {
  return async function (dispatch) {
    try {
      const response = await SubCategoryService.addSubCat(subCategory);
      dispatch(addSubCatSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}

export function deleteSubCat(id) {
  return async function (dispatch) {
    try {
      const response = await SubCategoryService.deleteSubCat(id);
      dispatch(deleteSubCatSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
export function editSubCat(role) {
  return async function (dispatch) {
    try {
      const response = await SubCategoryService.editSubCat(role);
      dispatch(editSubCatSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
