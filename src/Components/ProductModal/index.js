import React from "react";
import { Modal, Input, Form, Col, Row, Button, Select } from "antd";
import { connect } from "react-redux";

const {Option} =Select
const ProductModal = ({ mode, data, subCategories, visible, handleOk, handleCancel }) => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };
  const subCategoryDropdown = () => {
    return subCategories.map((sub) => (
      <Option key={sub.id} value={sub.id}>
        {sub.name}
      </Option>
    ));
  };
  return (
    <>
      <Modal
        width={700}
        footer={false}
        title={mode === "add" ? "Add Product" : "Edit Product"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          initialValues={{
            name: data.name,
            subCategoryId: data.subCategoryId,
            price: data.price,
            description: data.description,
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
                label="Sub Category"
                name="subCategoryId"
                rules={[
                  {
                    required: true,
                    message: `Please input your Sub Category`,
                  },
                ]}
              >
                <Select>{subCategoryDropdown()}</Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Price"
                name="price"
                rules={[
                  {
                    required: true,
                    message: `Please input your Price`,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: `Please input your Description`,
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
const mapStateToProps = (state, ownProps) => {
  return {
    subCategories: state.SubCategoryReducer.subCategories,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal);
