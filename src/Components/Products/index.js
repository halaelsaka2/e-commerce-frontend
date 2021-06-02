import React, { useState, useEffect } from "react";
import { Button, Col, message, Modal, Pagination, Row, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import TableOfData from "../Table";
import ProductModal from "../ProductModal";
import PlusIcon from "../PlusIcon";
import { getAllProducts } from "../../Redux/Product/Actions";
import { connect } from "react-redux";
import { editProduct, addProduct, deleteProduct } from "../../Redux/Product/Actions";
const { confirm } = Modal;

const Products = (props) => {
  const [visible, setVisible] = useState(false);
  const [product, setProduct] = useState({});
  const [mode, setMode] = useState("add");
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.getAllProducts(page);
  }, []);

  useEffect(() => {
    if (props.deletedProduct !== null) {
      if (props.deletedProduct.deleted === true) {
        message.success(props.deletedProduct.msg);
      } else {
        message.error(props.deletedProduct.msg);
      }
    }
  }, [props.deletedProduct]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (values) => {
    setVisible(false);
    if (mode === "add") props.addProduct(values);
    else props.editProduct({ ...values, id: product.id });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteThisProduct = (id) => {
    return confirm({
      title: "Delete Product",
      content: "Do you want to delete this Product?",
      align: "right",
      onOk() {
        props.deleteProduct(id);
      },
      onCancel() {},
    });
  };
  const editProduct = (product) => {
    setProduct(product);
    showModal();
    setMode("edit");
  };

  const addProduct = () => {
    showModal();
    setProduct({});
    setMode("add");
  };

  const data =
    props.products.length > 0
      ? props.products.map((product, index) => {
          return {
            key: index,
            name: product.name,
            subCategoryId: product.subCategory?.name,
            description: product.description,
            price: product.price,

            action: (
              <>
                <Tooltip title="Edit">
                  <Button
                    onClick={() => editProduct(product)}
                    style={{ marginRight: ".5rem", borderColor: "#d9d9d9" }}
                    icon={<EditOutlined style={{ color: "#777" }} />}
                  />
                </Tooltip>

                <Tooltip title="Delete">
                  <Button
                    icon={<DeleteOutlined style={{ color: "#777" }} />}
                    onClick={() => deleteThisProduct(product.id)}
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
      title: "Sub Category",
      dataIndex: "subCategoryId",
      key: "3",
      align: "center",
      width: 90,
      sorter: (a, b) => a.subCategoryId.localeCompare(b.subCategoryId),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "4",
      align: "center",
      width: 90,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "5",
      align: "center",
      width: 90,
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "8",
      align: "center",
      width: 40,
    },
  ];
  const SearchPaginate = (page, pageSize) => props.getAllProducts(page);

  return (
    <>
      <PlusIcon add={addProduct} type="Product" />
      <Row gutter={24}>
        <TableOfData data={data} columns={columns} type="product" />
      </Row>
      <Row>
        <Col span={24} align="right" style={{margin:"1rem 0"}}>
          <Pagination
            onChange={SearchPaginate}
            total={props.productsCount}
            showTotal={(total, range) => `${total} Products`}
            defaultCurrent={1}
          />
        </Col>
      </Row>
      {visible && (
        <ProductModal
          visible={visible}
          showModal={showModal}
          handleCancel={handleCancel}
          data={product}
          mode={mode}
          handleOk={handleOk}
        />
      )}
    </>
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    products: state.ProductReducer.products,
    productsCount: state.ProductReducer.productsCount,
    deletedProduct: state.ProductReducer.deletedProduct,
  };
};
const mapDispatchToProps = { getAllProducts, deleteProduct, editProduct, addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
