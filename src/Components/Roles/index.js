import React, { useState, useEffect } from "react";
import { Button, message, Modal, Row, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TableOfData from "../Table";
import RoleModal from "../RoleModal";
import PlusIcon from "../PlusIcon";
import { connect } from "react-redux";
import { addRole, deleteRole, editRole } from "../../Redux/Role/Actions";
const { confirm } = Modal;

const Roles = (props) => {
  const [visible, setVisible] = useState(false);
  const [role, setRole] = useState({});
  const [mode, setMode] = useState("add");

  useEffect(() => {
    if (props.deletedRole !== null) {
      if (props.deletedRole.deleted === true) {
        message.success(props.deletedRole.msg);
      } else {
        message.error(props.deletedRole.msg);
      }
    }
  }, [props.deletedRole]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setVisible(false);
    if (mode === "add") props.addRole(values);
    else props.editRole({ ...values, id: role.id });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteThisRole = (id) => {
    return confirm({
      title: "Delete Role",
      content: "Do you want to delete this Role?",
      align: "right",
      onOk() {
        props.deleteRole(id);
      },
      onCancel() {},
    });
  };
  const editRole = (role) => {
    setRole(role);
    showModal();
    setMode("edit");
  };

  const addRole = () => {
    showModal();
    setRole({});
    setMode("add");
  };

  const data =
    props.roles.length > 0
      ? props.roles.map((role, index) => {
          return {
            key: index,
            name: role.name,
            subCategoryId: role.subCategoryId,
            description: role.description,
            price: role.price,

            action: (
              <>
                <Tooltip title="Edit">
                  <Button
                    onClick={() => editRole(role)}
                    style={{ marginRight: ".5rem", borderColor: "#d9d9d9" }}
                    icon={<EditOutlined style={{ color: "#777" }} />}
                  />
                </Tooltip>

                <Tooltip title="Delete">
                  <Button
                    icon={<DeleteOutlined style={{ color: "#777" }} />}
                    onClick={() => deleteThisRole(role.id)}
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
      sorter: (a, b) => a.unit_name.localeCompare(b.unit_name),
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
      <PlusIcon add={addRole} type="Role" />
      <Row gutter={24}>
        <TableOfData data={data} columns={columns} />
      </Row>
      {visible && (
        <RoleModal
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          data={role}
          mode={mode}
          handleOk={handleOk}
        />
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    roles: state.RoleReducer.roles,
    deletedRole: state.RoleReducer.deletedRole,
  };
};
const mapDispatchToProps = { addRole, deleteRole, editRole };

export default connect(mapStateToProps, mapDispatchToProps)(Roles);
