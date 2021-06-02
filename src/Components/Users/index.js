import React, { useEffect, useState } from "react";
import { Button, message, Modal, Row, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TableOfData from "../Table";
import UserModal from "../UserModal";
import PlusIcon from "../PlusIcon";
import { getAllUsers, editUser, addUser } from "../../Redux/User/Actions";
import { connect } from "react-redux";
const { confirm } = Modal;

const Users = (props) => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({});
  const [mode, setMode] = useState("add");

  useEffect(() => {
    props.getAllUsers();
  }, []);
  useEffect(() => {
    if (props.addUserMessage !== null) {
      if (props.addUserMessage.isSignUp === true) message.success(props.addUserMessage.msg);
      else message.error(props.addUserMessage.msg);
    }
  }, [props.addUserMessage]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setVisible(false);
    if (mode === "add") props.addUser(values);
    else props.editUser({ ...values, id: user.id });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const editUser = (user) => {
    setUser(user);
    showModal();
    setMode("edit");
    props.editUser(user);
  };

  const addUser = () => {
    showModal();
    setUser({});
    setMode("add");
  };

  const data =
    props.allUsers.length > 0
      ? props.allUsers.map((user, index) => {
          return {
            key: index,
            userName: user.userName,
            email: user.email,
            roleId: user.role?.name,
            isActive: user.isActive === true ? "Active" : "Not Active",

            action: (
              <>
                <Tooltip title="Edit">
                  <Button
                    onClick={() => editUser(user)}
                    style={{ marginRight: ".5rem", borderColor: "#d9d9d9" }}
                    icon={<EditOutlined style={{ color: "#777" }} />}
                  />
                </Tooltip>
              </>
            ),
          };
        })
      : [];

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "2",
      // ellipsis: true,
      align: "center",
      width: 90,
      sorter: (a, b) => a.userName.localeCompare(b.userName),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "2",
      // ellipsis: true,
      align: "center",
      width: 90,
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Role",
      dataIndex: "roleId",
      key: "2",
      // ellipsis: true,
      align: "center",
      width: 90,
      sorter: (a, b) => a.roleId.localeCompare(b.roleId),
    },
    {
      title: "Is Active",
      dataIndex: "isActive",
      key: "2",
      // ellipsis: true,
      align: "center",
      width: 90,
      sorter: (a, b) => a.isActive.localeCompare(b.isActive),
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
      <PlusIcon add={addUser} type="User" />
      <Row gutter={24}>
        <TableOfData data={data} columns={columns} />
      </Row>
      {visible && (
        <UserModal
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          data={user}
          mode={mode}
          handleOk={handleOk}
        />
      )}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    allUsers: state.UserReducer.allUsers,
    addUserMessage: state.UserReducer.addUserMessage,
  };
};
const mapDispatchToProps = { getAllUsers, editUser, addUser };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
