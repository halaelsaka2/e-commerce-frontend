import React from "react";
import { Layout } from "antd";
import CategoryHeader from "../../Components/CategoryHeader";
import { withRouter } from "react-router";
import Nav from "../../Components/Nav";
import SiderBar from "../../Components/Sider";
const { Content } = Layout;
const BasicLayout = (props) => {
  return (
    <Layout>
      {props.location.pathname.startsWith("/adminPage") && <SiderBar />}

      <Layout>
        <Nav count={props.count} />
        {props.location.pathname !== "/cartList" && !props.location.pathname.startsWith("/adminPage") && (
          <CategoryHeader page={props.page} setPage={props.setPage} />
        )}
        <Content style={{ padding: "0px 50px", background: "#FFF" }}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default withRouter(BasicLayout);
