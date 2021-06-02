import * as types from "../Types";
import initialState from "../initialState";

export default function CartReducer(state = initialState, action) {
  let cartCount = 0;
  switch (action.type) {
    case types.ADD_TO_CART:
      let cartProducts = [...state.cartProducts];
      let product = action.data;
      let alreadyExist = false;

      cartProducts.forEach((item) => {
        if (item.id === product.id) {
          item.count++;
          alreadyExist = true;
        }
      });
      if (!alreadyExist) {
        cartProducts.push({ ...product, count: 1 });
      }
      cartCount = state.cartCount + 1;
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
      localStorage.setItem("cartCount", JSON.parse( cartCount));
      return { ...state, cartProducts, cartCount };
    case types.DELETE_FROM_CART:
      const filterProducts = state.cartProducts.filter((product) => product.id !== action.data.id);
      cartCount = state.cartCount - action.data.count;
      localStorage.setItem("cartProducts", JSON.stringify(filterProducts));
      localStorage.setItem("cartCount", JSON.parse( cartCount));
      return { ...state, cartProducts: filterProducts, cartCount };
    case types.REMOVE_CART_FROM_STORAGE:
      localStorage.removeItem("cartProducts");
      localStorage.removeItem("cartCount");
      return { ...state, cartProducts: [], cartCount: 0 };
    default:
      return state;
  }
}
