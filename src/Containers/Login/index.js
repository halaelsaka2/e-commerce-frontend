import React, { useEffect } from "react";
import { Form, Input, Button, message, Divider, Col } from "antd";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { login } from "../../Redux/User/Actions";
const Login = (props) => {
  const onFinish = (values) => {
    props.login(values);
  };

  useEffect(() => {
    if (props.userData.isAuthenticate && props.userData.isAuthenticate === true) {
      if (props.userData.roleId === 1) {
        props.history.push("/adminPage");
      } else {
        props.history.push("/");
      }
      message.success("Welcome Back!");
    } else if (props.userData.isAuthenticate === false) {
      message.error(props.userData.msg);
    }
  }, [props.userData]);

  const tailLayout = {
    wrapperCol: {
      span: 6,
      offset: 8,
    },
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 6 },
  };
  return (
    <>
      <Col span={6} offset={9}>
        <h1 style={{ marginBottom: "2rem" }}>Sign in to continue</h1>
        {/* <h5 style={{ marginBottom: "2rem ", margin: "1rem" }}>
          Don’t have an account?<Link to="/register">Sign up</Link>{" "}
        </h5> */}
      </Col>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input Email!" },
            { type: "email", message: "Please Input a Valid Email" },
          ]}
        >
          <Input style={{ borderRadius: "8px" }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password style={{ borderRadius: "8px" }} />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button size="large" style={{ width: 320, borderRadius: "8px" }} type="primary" htmlType="submit">
            SIGN IN
          </Button>
        </Form.Item>
        <Col span={6} offset={8}>
          <Divider>Don’t have an account?</Divider>
        </Col>
        <Form.Item {...tailLayout}>
          <Button
            size="large"
            style={{
              width: 320,
              color: "black",
              fontWeight: "500",
              borderColor: "white",
              backgroundColor: "transparent",
              borderRadius: "8px",
            }}
            type="primary"
            onClick={() => {
              props.history.push("/register");
            }}
          >
            CREATE AN ACCOUNT
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.UserReducer.userData,
  };
};
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
