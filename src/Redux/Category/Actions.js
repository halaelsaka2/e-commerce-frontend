import * as types from "../Types";
import CategoryService from "../../Api/Category";

export function getAllCategoriesSuccess(data) {
  return { type: types.GET_ALL_CATEGORY, data };
}

function editCategorySuccess(data) {
  return { type: types.EDIT_CATEGORY, data };
}
function addCategorySuccess(data) {
  return { type: types.ADD_CATEGORY, data };
}

function deleteCategorySuccess(data) {
  return { type: types.DELETE_CATEGORY, data };
}
//thunk
export function getAllCategories() {
  return async function (dispatch) {
    const response = await CategoryService.getAllCategories();
    dispatch(getAllCategoriesSuccess(response.data));
  };
}

export function editCategory(category) {
  return async function (dispatch) {
    try {
      const response = await CategoryService.editCategory(category);
      dispatch(editCategorySuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
export function addCategory(category) {
  return async function (dispatch) {
    try {
      const response = await CategoryService.addCategory(category);
      dispatch(addCategorySuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}

export function deleteCategory(id) {
  return async function (dispatch) {
    try {
      const response = await CategoryService.deleteCategory(id);
      dispatch(deleteCategorySuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
