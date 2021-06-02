import React from "react";
import { Tooltip, Row, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const PlusIcon = ({ add,type }) => {
  return (
    <>
      <Row justify="end">
        <Tooltip title={`Add ${type}`}>
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined style={{ fontSize: "1.4rem" }} />}
            size="large"
            style={{ margin: ".6rem" }}
            onClick={add}
          />
        </Tooltip>
      </Row>
    </>
  );
};

export default PlusIcon;
