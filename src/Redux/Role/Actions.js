import * as types from "../Types";
import roleService from "../../Api/Role";

export function getAllRolesSuccess(data) {
  return { type: types.GET_ALL_ROLES, data };
}
export function addRoleSuccess(data) {
  return { type: types.ADD_ROLE, data };
}
export function editRoleSuccess(data) {
  return { type: types.EDIT_ROLE, data };
}
export function deleteRoleSuccess(data) {
  return { type: types.DELETE_ROLE, data };
}

export function getAllRoles() {
  return async function (dispatch) {
    try {
      const response = await roleService.getAllRoles();
      dispatch(getAllRolesSuccess(response.data));
    } catch (error) {
      console.log(error.response.status);
    }
  };
}

export function addRole(role) {
  return async function (dispatch) {
    const response = await roleService.addRole(role);
    dispatch(addRoleSuccess(response.data));
  };
}

export function deleteRole(id) {
  return async function (dispatch) {
    const response = await roleService.deleteRole(id);
    dispatch(deleteRoleSuccess(response.data));
  };
}
export function editRole(role) {
  return async function (dispatch) {
    const response = await roleService.editRole(role);
    dispatch(editRoleSuccess(response.data));
  };
}
