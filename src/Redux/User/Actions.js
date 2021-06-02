import * as types from "../Types";
import userService from "../../Api/User";

export function loginSuccess(data) {
  return { type: types.LOGIN, data };
}

export function registerSuccess(data) {
  return { type: types.REGISTER, data };
}

export function getAllUsersSuccess(data) {
  return { type: types.GET_ALL_USERS, data };
}
export function addUserSuccess(data) {
  return { type: types.ADD_USER, data };
}
export function editUserSuccess(data) {
  return { type: types.EDIT_USER, data };
}

export function login(values) {
  return async function (dispatch) {
    const response = await userService.login(values);
    dispatch(loginSuccess(response.data));
  };
}
export function logout() {
  return async function (dispatch) {
    dispatch({ type: types.LOGOUT });
  };
}
export function register(values) {
  return async function (dispatch) {
    const response = await userService.register(values);
    dispatch(registerSuccess(response.data));
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    try {
      const response = await userService.getAllUsers();
      dispatch(getAllUsersSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}

export function addUser(user) {
  return async function (dispatch) {
    try {
      const response = await userService.addUser(user);
      dispatch(addUserSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
export function editUser(user) {
  return async function (dispatch) {
    try {
      const response = await userService.editUser(user);
      dispatch(editUserSuccess(response.data));
    } catch (error) {
      dispatch({ type: types.SET_STATUS, data: error.response.status });
    }
  };
}
