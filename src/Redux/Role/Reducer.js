import * as types from "../Types";
import initialState from "../initialState";

export default function RoleReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_ROLES:
      return { ...state, roles: action.data };
    case types.ADD_ROLE:
      return { ...state, roles: [...state.roles, action.data] };
    case types.DELETE_ROLE:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== action.data.id),
        deletedRole: { deleted: action.data.deleted, msg: action.data.msg },
      };
    case types.EDIT_ROLE:
      return {
        ...state,
        roles: state.roles.map((role) => (role = role.id === action.data.id ? action.data : role)),
      };
    default:
      return state;
  }
}
