import React from "react";
import { Modal, Input, Form, Col, Row, Button } from "antd";

const CategoryModal = ({ mode, data, visible, handleOk, handleCancel }) => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };

  return (
    <>
      <Modal
        width={700}
        footer={false}
        title={mode === "add" ? "Add Category" : "Edit Category"}
        visible={visible}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          initialValues={{
            name: data.name,
            details: data.details,
          }}
          onFinish={handleOk}
        >
          <Row>
            <Col span={8}>
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

            <Col span={8}>
              <Form.Item
                label="Details"
                name="details"
                rules={[
                  {
                    required: true,
                    message: `Please input your Details`,
                  },
                ]}
              >
                <Input />
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

export default CategoryModal;
