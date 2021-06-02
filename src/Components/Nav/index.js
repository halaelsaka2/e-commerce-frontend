import React from "react";
import { Layout, List, Col, Row, Badge, Menu, Dropdown } from "antd";
import { connect } from "react-redux";
import { getAllProducts } from "../../Redux/Product/Actions";
import { withRouter } from "react-router";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { logout } from "../../Redux/User/Actions";

const { Header } = Layout;
const Nav = (props) => {
  const logOut = () => {
    localStorage.clear();
    props.logout();
    props.history.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <span onClick={logOut}>Log Out</span>
      </Menu.Item>
    </Menu>
  );
  const data = [
    localStorage.getItem("token") === null ? (
      <span
        style={{
          fontSize: ".8rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => {
          props.history.push("/login");
        }}
      >
        Sign In
        <img alt="user" src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" width="30%" />
      </span>
    ) : (
      <Dropdown overlay={menu}>
        <span style={{ width: "100%", fontWeight: 700, cursor: "pointer" }}>
          {localStorage.getItem("userName")} <DownOutlined />
        </span>
      </Dropdown>
    ),
    localStorage.getItem("roleId") === "1" ? (
      props.location.pathname.startsWith("/adminPage") ? (
        <Link to="/" style={{ color: "black" }}>
          Home
        </Link>
      ) : (
        <Link to="/adminPage" style={{ color: "black" }}>
          Admin Page
        </Link>
      )
    ) : (
      <div
        onClick={() => {
          props.history.push("/cartList");
        }}
        style={{ cursor: "pointer" }}
      >
        <Badge count={props.cartCount}>
          <img alt="cart" src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" />
        </Badge>
      </div>
    ),
  ];
  return (
    <Header className="site-layout-sub-header-background" style={{ background: "#FEEE00" }}>
      <Row justify="space-between">
        <Col span={8} pull={1}>
          <div
            onClick={() => {
              props.history.push("/");
              props.getAllProducts();
            }}
          >
            <img
              width="40%"
              src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
              alt="logo"
              style={{ cursor: "pointer" }}
            />
          </div>
        </Col>
        <Col span={4} style={{ marginTop: "1rem" }}>
          <List
            grid={{ column: 2 }}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => <List.Item align="right">{item}</List.Item>}
          />
        </Col>
      </Row>
    </Header>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartCount: state.CartReducer.cartCount,
    userData: state.UserReducer.userData,
  };
};
const mapDispatchToProps = { getAllProducts, logout };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
