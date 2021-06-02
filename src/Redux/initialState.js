const obj = {
  categories: [],
  products: [],
  productsCount: 0,
  cartProducts: localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : [],
  cartCount: localStorage.getItem("cartCount") ? JSON.parse(localStorage.getItem("cartCount")) : 0,
  userData: {},
  allUsers: [],
  addUserMessage: null,
  roles: [],
  deletedCategory: null,
  subCategories: [],
  deletedProduct: null,
  deletedRole: null,
  deletedSub: null,
  status: null,
};

export default obj;
