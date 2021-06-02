import * as types from "../Types";
import initialState from "../initialState";

export default function UserReducer(state = initialState, action) {
  let user;
  switch (action.type) {
    case types.LOGIN:
      user = action.data;
      localStorage.setItem("token", user.token);
      localStorage.setItem("userName", user.userName);
      localStorage.setItem("roleId", user.roleId);
      return { ...state, userData: user };

    case types.REGISTER:
      user = action.data;
      localStorage.setItem("token", user.token);
      localStorage.setItem("userName", user.userName);
      localStorage.setItem("roleId", user.roleId);
      return { ...state, userData: user };
    case types.LOGOUT:
      return initialState;
    case types.GET_ALL_USERS:
      return { ...state, allUsers: action.data };
    case types.EDIT_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((user) => (user = user.id === action.data.id ? action.data : user)),
      };
    case types.ADD_USER:
      if (action.data.isSignUp === true) {
        return {
          ...state,
          allUsers: [...state.allUsers, action.data],
          addUserMessage: { isSignUp: action.data.isSignUp, msg: action.data.msg },
        };
      } else {
        return { ...state, addUserMessage: { isSignUp: action.data.isSignUp, msg: action.data.msg } };
      }

    default:
      return state;
  }
}
