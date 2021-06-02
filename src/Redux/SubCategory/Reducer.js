import * as types from "../Types";
import initialState from "../initialState";

export default function SubCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_SUB_CATEGORY:
      return { ...state, subCategories: action.data };

    case types.ADD_SUB_CATEGORY:
      return { ...state, subCategories: [...state.subCategories, action.data] };
    case types.Edit_SUB_CATEGORY:
      return {
        ...state,
        subCategories: state.subCategories.map((sub) => (sub = sub.id === action.data.id ? action.data : sub)),
      };
    case types.DELETE_SUB_CATEGORY:
      return {
        ...state,
        subCategories: state.subCategories.filter((user) => user.id !== action.data.id),
        deletedSub: { deleted: action.data.deleted, msg: action.data.msg },
      };

    default:
      return state;
  }
}
