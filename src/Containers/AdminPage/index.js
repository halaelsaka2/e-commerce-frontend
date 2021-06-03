import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import Layout from "../Layout";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import Products from "../../Components/Products";
import Roles from "../../Components/Roles";
import Users from "../../Components/Users";
import Categories from "../../Components/Categories";
import SubCategories from "../../Components/SubCategories";
import { getAllRoles } from "../../Redux/Role/Actions";
import { getAllSubCategory } from "../../Redux/SubCategory/Actions";
import { getAllCategories } from "../../Redux/Category/Actions";

const App = (props) => {
  useEffect(() => {
    if (props.roles.length === 0) props.getAllRoles();
    if (props.subCategories.length === 0) props.getAllSubCategory();
    if (props.categories.length === 0) props.getAllCategories();
  }, []);
  return (
    <>
      <Switch>
        <Layout>
          <Route path="/adminPage/" exact component={Users} />
          <Route path="/adminPage/products" exact component={Products} />
          <Route path="/adminPage/roles" exact component={Roles} />
          <Route path="/adminPage/users" exact component={Users} />
          <Route path="/adminPage/categories" exact component={Categories} />
          <Route path="/adminPage/subCategories" exact component={SubCategories} />
        </Layout>
      </Switch>
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    roles: state.RoleReducer.roles,
    subCategories: state.SubCategoryReducer.subCategories,
    categories: state.CategoryReducer.categories,
  };
};
const mapDispatchToProps = { getAllRoles, getAllSubCategory, getAllCategories };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
