import * as types from "../Types";
import initialState from "../initialState";

export default function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_CATEGORY:
      return { ...state, categories: action.data };
    case types.EDIT_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(
          (category) => (category = category.id === action.data.id ? action.data : category)
        ),
      };
    case types.ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.data] };
    case types.DELETE_CATEGORY:
      return {
        ...state,
        deletedCategory: { deleted: action.data.deleted, msg: action.data.msg },
        categories: state.categories.filter((category) => category.id !== action.data.id),
      };
    default:
      return state;
  }
}
