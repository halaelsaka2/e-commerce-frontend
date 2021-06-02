import React, { useEffect, useState } from "react";
import { Button, message, Modal, Row, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TableOfData from "../Table";
import CategoryModal from "../CategoryModal";
import PlusIcon from "../PlusIcon";
import { connect } from "react-redux";
import { editCategory, addCategory, deleteCategory } from "../../Redux/Category/Actions";
const { confirm } = Modal;

const Categories = (props) => {
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState({});
  const [mode, setMode] = useState("add");

  useEffect(() => {
    if (props.deletedCategory !== null) {
      if (props.deletedCategory.deleted === true) {
        message.success(props.deletedCategory.msg);
      } else {
        message.error(props.deletedCategory.msg);
      }
    }
  }, [props.deletedCategory]);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setVisible(false);
    if (mode === "add") props.addCategory(values);
    else props.editCategory({ ...values, id: category.id });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteThisCategory = (id) => {
    return confirm({
      title: "Delete Category",
      content: "Do you want to delete this Category?",
      align: "right",
      onOk() {
        props.deleteCategory(id);
      },
      onCancel() {},
    });
  };
  const editCategory = (category) => {
    setCategory(category);
    showModal();
    setMode("edit");
  };

  const addCategory = () => {
    showModal();
    setCategory({});
    setMode("add");
  };

  const data =
    props.categories.length > 0
      ? props.categories.map((category, index) => {
          return {
            key: index,
            name: category.name,
            details: category.details,
            action: (
              <>
                <Tooltip title="Edit">
                  <Button
                    onClick={() => editCategory(category)}
                    style={{ marginRight: ".5rem", borderColor: "#d9d9d9" }}
                    icon={<EditOutlined style={{ color: "#777" }} />}
                  />
                </Tooltip>

                <Tooltip title="Delete">
                  <Button
                    icon={<DeleteOutlined style={{ color: "#777" }} />}
                    onClick={() => deleteThisCategory(category.id)}
                    style={{ borderColor: "#d9d9d9" }}
                  />
                </Tooltip>
              </>
            ),
          };
        })
      : [];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "2",
      align: "center",
      width: 90,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "details",
      dataIndex: "details",
      key: "5",
      align: "center",
      width: 90,
      sorter: (a, b) => a.details.localeCompare(b.details),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "8",
      align: "center",
      width: 40,
    },
  ];
  return (
    <>
      <PlusIcon add={addCategory} type="category" />
      <Row gutter={24}>
        <TableOfData data={data} columns={columns} />
      </Row>
      {visible && (
        <CategoryModal
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          data={category}
          mode={mode}
          handleOk={handleOk}
        />
      )}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.CategoryReducer.categories,
    deletedCategory: state.CategoryReducer.deletedCategory,
  };
};
const mapDispatchToProps = { editCategory, addCategory, deleteCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
