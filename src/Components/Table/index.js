import React from "react";
import { Table, Col } from "antd";

const TableOfData = ({ data, columns }) => {
  return (
    <>
      <Col span={24}>
        <Table columns={columns} bordered dataSource={data} />
      </Col>
    </>
  );
};

export default TableOfData;
