import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
const { Sider } = Layout;
const SiderBar = (props) => {
  const [current, setCurrent] = useState("1");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ backgroundColor: "#FFF" }}
    >
      <Menu onClick={handleClick} mode="inline" selectedKeys={[current]}>
        <Menu.Item key="1" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
          <Link to="/adminPage/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="2" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
          <Link to="/adminPage/products">Products</Link>
        </Menu.Item>
        <Menu.Item key="3" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
          <Link to="/adminPage/roles">Roles</Link>
        </Menu.Item>
        <Menu.Item key="4" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
          <Link to="/adminPage/categories">Categories</Link>
        </Menu.Item>{" "}
        <Menu.Item key="5" style={{ color: "rgba(0, 0, 0, 0.65)" }}>
          <Link to="/adminPage/subCategories">Sub Categories</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(SiderBar);
