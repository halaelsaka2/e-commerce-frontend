import React from "react";
import { Row } from "antd";
import { connect } from "react-redux";
import { getAllProducts } from "../../Redux/Product/Actions";
const AddProduct = (props) => {
  return <Row gutter={[16, 16]}>hala</Row>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    products: state.ProductReducer.products,
  };
};
const mapDispatchToProps = { getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
