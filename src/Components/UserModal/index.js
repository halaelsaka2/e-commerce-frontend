import React, { useEffect } from "react";
import { Modal, Input, Form, Col, Row, Radio, Button, Switch, Select } from "antd";
import { connect } from "react-redux";
import { getAllRoles } from "../../Redux/Role/Actions";

const { Option } = Select;
const UserModal = ({ mode, getAllRoles, data, roles, visible, handleOk, handleCancel }) => {

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };
  const rolesDropdown = () => {
    return roles.map((role) => (
      <Option key={role.id} value={role.id}>
        {role.name}
      </Option>
    ));
  };

  return (
    <>
      <Modal
        width={700}
        footer={false}
        title={mode === "add" ? "Add User" : "Edit User"}
        visible={visible}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          initialValues={{
            userName: data.userName,
            email: data.email,
            roleId: data.roleId,
            isActive: data.isActive,
          }}
          onFinish={handleOk}
        >
          <Row>
            <Col span={8}>
              <Form.Item
                label="User Name"
                name="userName"
                rules={[
                  {
                    required: true,
                    message: `Please input your User Name`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={8}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: `Please input your Email`,
                  },
                  {
                    type: "email",
                    message: `Please input invalid email`,
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Role"
                name="roleId"
                rules={[
                  {
                    required: true,
                    message: `Please input your Role`,
                  },
                ]}
              >
                <Select>{rolesDropdown()}</Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Is Active"
                name="isActive"
                rules={[
                  {
                    required: true,
                    message: `Please input your isActive`,
                  },
                ]}
                checked={data.isActive}
              >
                <Radio.Group>
                  <Radio value={true}>Yes</Radio>
                  <Radio value={false}>No</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col span={8} align="bottom" style={{ marginTop: "2.5rem" }}>
              <Form.Item>
                <Button
                  type="primary"
                  ghost={true}
                  style={{ marginRight: "1rem", width: "4.5rem" }}
                  htmlType="submit"
                >
                  {mode === "add" ? "Add" : "Edit"}
                </Button>

                <Button danger ghost={true} onClick={handleCancel} style={{ width: "4.5rem" }}>
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    roles: state.RoleReducer.roles,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);
