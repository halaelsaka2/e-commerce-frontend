import React from "react";

import { Switch, Route } from "react-router-dom";
import Layout from "../Layout";
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
          <Layout>
            <Route path="/" exact render={(props) => <ProductList addToCart={addToCart} />} />
            <Route path="/addProduct" component={AddProduct} />
            <Route path="/cartList" render={(props) => <CartList />} />
          </Layout>
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
