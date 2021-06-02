import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import { connect } from "react-redux";

import { getAllCategories } from "../../Redux/Category/Actions";
import { getProductsBySubId } from "../../Redux/Product/Actions";
const { SubMenu } = Menu;
const { Header } = Layout;
const CategoryHeader = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    props.getAllCategories();
  }, []);

  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  const selectSubHandler = (subId) => {
    props.getProductsBySubId(subId);
  };
  return (
    <Header style={{ background: "#FFF" }}>
      <Menu mode="horizontal">
        {categories.length > 0
          ? categories.map(({ id, name, subCategories }) => (
              <SubMenu key={id} title={name}>
                {subCategories.map(({ id, name }) => (
                  <Menu.Item key={`sub-${id}`} onClick={() => selectSubHandler(id)}>
                    {name}
                  </Menu.Item>
                ))}
              </SubMenu>
            ))
          : "No Categories Yet"}
      </Menu>
    </Header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.CategoryReducer.categories,
  };
};
const mapDispatchToProps = { getAllCategories, getProductsBySubId };

export default connect(mapStateToProps, mapDispatchToProps)(CategoryHeader);