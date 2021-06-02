import React from "react";
import { Modal, Input, Form, Col, Row, Button, Select } from "antd";
import { connect } from "react-redux";

const { Option } = Select;
const SubCategoryModal = ({ mode, categories, data, visible, handleOk, handleCancel }) => {
  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 20 },
  };
  const categoryDropdown = () => {
    return categories.map((cat) => (
      <Option key={cat.id} value={cat.id}>
        {cat.name}
      </Option>
    ));
  };

  return (
    <>
      <Modal
        width={700}
        footer={false}
        title={mode === "add" ? "Add Sub Category" : "Edit Sub Category"}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          initialValues={{
            name: data.name,
            categoryId: data.categoryId,
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
                label="Category"
                name="categoryId"
                rules={[
                  {
                    required: true,
                    message: `Please input your Category`,
                  },
                ]}
              >
                <Select>{categoryDropdown()}</Select>
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
    categories: state.CategoryReducer.categories,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryModal);
