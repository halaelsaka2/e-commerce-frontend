import React, { useState, useEffect } from "react";
import { Button, message, Modal, Row, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TableOfData from "../Table";
import SubCategryModal from "../SubCategryModal";
import PlusIcon from "../PlusIcon";
import { connect } from "react-redux";
import { addSubCat, editSubCat, deleteSubCat } from "../../Redux/SubCategory/Actions";
const { confirm } = Modal;

const SubCategories = (props) => {
  const [visible, setVisible] = useState(false);
  const [subCategory, setsubCategory] = useState({});
  const [mode, setMode] = useState("add");

  useEffect(() => {
    console.log(props.deletedSub);
    if (props.deletedSub !== null) {
      if (props.deletedSub.deleted === true) {
        message.success(props.deletedSub.msg);
      } else {
        message.error(props.deletedSub.msg);
      }
    }
  }, [props.deletedSub]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setVisible(false);
    if (mode === "add") props.addSubCat(values);
    else props.editSubCat({ ...values, id: subCategory.id });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteThisSubCategory = (id) => {
    return confirm({
      title: "Delete Sub Category",
      content: "Do you want to delete this Sub Category?",
      align: "right",
      onOk() {
        props.deleteSubCat(id);
      },
      onCancel() {},
    });
  };
  const editSubCategory = (subCategory) => {
    setsubCategory(subCategory);
    showModal();
    setMode("edit");
  };

  const addSubCategory = () => {
    showModal();
    setsubCategory({});
    setMode("add");
  };

  const data =
    props.subCategories.length > 0
      ? props.subCategories.map((subCategory, index) => {
          return {
            key: index,
            name: subCategory.name,
            categoryId: subCategory.category?.name,

            action: (
              <>
                <Tooltip title="Edit">
                  <Button
                    onClick={() => editSubCategory(subCategory)}
                    style={{ marginRight: ".5rem", borderColor: "#d9d9d9" }}
                    icon={<EditOutlined style={{ color: "#777" }} />}
                  />
                </Tooltip>

                <Tooltip title="Delete">
                  <Button
                    icon={<DeleteOutlined style={{ color: "#777" }} />}
                    onClick={() => deleteThisSubCategory(subCategory.id)}
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
      // ellipsis: true,
      align: "center",
      width: 90,
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "2",
      // ellipsis: true,
      align: "center",
      width: 90,
      sorter: (a, b) => a.categoryId.localeCompare(b.categoryId),
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
      <PlusIcon add={addSubCategory} type="Sub Category" />
      <Row gutter={24}>
        <TableOfData data={data} columns={columns} />
      </Row>
      {visible && (
        <SubCategryModal
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          data={subCategory}
          mode={mode}
          handleOk={handleOk}
        />
      )}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    subCategories: state.SubCategoryReducer.subCategories,
    deletedSub: state.SubCategoryReducer.deletedSub,
  };
};
const mapDispatchToProps = { addSubCat, editSubCat, deleteSubCat };

export default connect(mapStateToProps, mapDispatchToProps)(SubCategories);
