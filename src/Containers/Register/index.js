import React, { useEffect } from "react";
import { Form, Input, Button, message, Col, Divider } from "antd";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { register } from "../../Redux/User/Actions";
const Register = (props) => {
  const onFinish = (values) => {
    props.register(values);
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

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 6 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  return (
    <>
      <Col span={6} offset={9}>
        <h1 style={{ marginBottom: "2rem" }}>Create an account</h1>
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
          label="User Name"
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your userName!",
            },
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
            Register
          </Button>
        </Form.Item>
        <Col span={6} offset={8}>
          <Divider>Have an account?</Divider>
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
              props.history.push("/login");
            }}
          >
            SIGIN IN
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
const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
