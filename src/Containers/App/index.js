import React, { useState } from "react";

import { Switch, Route } from "react-router-dom";
import BasicLayout from "../Layout";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Login from "../Login";
import Register from "../Register";
import ProductList from "../../Components/ProductList";
import AddProduct from "../../Components/AddProduct";
import CartList from "../../Components/CartList";
import { addToCart } from "../../Redux/Cart/Actions";
import AdminPage from "../AdminPage";
import NotAuthorizationPage from "../NotAuthorizedPage";

const App = (props) => {
  const [page, setPage] = useState(1);

  const addToCart = (product) => {
    props.addToCart(product);
  };
  
  return (
    <>
      {props.status === 403 ? (
        <NotAuthorizationPage />
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/adminPage" component={AdminPage} />
          <BasicLayout page={page} setPage={setPage}>
            <Route path="/" exact render={(props) => <ProductList page={page} setPage={setPage} addToCart={addToCart} />} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/cartList" render={(props) => <CartList />} />
          </BasicLayout>
        </Switch>
      )}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    status: state.RoleReducer.status,
  };
};
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
