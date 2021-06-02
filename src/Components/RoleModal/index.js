import React from "react";
import { Modal, Input, Form, Col, Row, Button } from "antd";

const RoleModal = ({ mode, data, visible, handleOk, handleCancel }) => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  return (
    <>
      <Modal
        footer={false}
        title={mode === "add" ? "Add Role" : "Edit Role"}
        visible={visible}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          initialValues={{
            name: data.name,
          }}
          onFinish={handleOk}
        >
          <Row>
            <Col>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: `Please input your Name`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col push={6} style={{ marginTop: "2.5rem" }}>
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

export default RoleModal;
