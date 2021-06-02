import * as types from "../Types";
import initialState from "../initialState";

export default function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCTS:
      return { ...state, products: action.data };
    case types.GET_PRODUCTS_BY_SUB_ID:
      return { ...state, products: action.data };
    case types.EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map(
          (product) => (product = product.id === action.data.id ? action.data : product)
        ),
      };
    case types.ADD_PRODUCT:
      return { ...state, products: [...state.products, action.data] };
    case types.DELETE_PRODUCT:
      return {
        ...state,
        deletedProduct: { deleted: action.data.deleted, msg: action.data.msg },
        products: state.products.filter((peoduct) => peoduct.id !== action.data.id),
      };
    default:
      return state;
  }
}
