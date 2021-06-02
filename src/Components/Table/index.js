import React from "react";
import { Table, Col } from "antd";

const TableOfData = ({ data, columns, type }) => {
  return (
    <>
      <Col span={24}>
        <Table columns={columns} bordered dataSource={data} pagination={type !== "product"} />
      </Col>
    </>
  );
};

export default TableOfData;
