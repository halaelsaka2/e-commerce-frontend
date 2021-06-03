import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Pagination } from "antd";
import { connect } from "react-redux";
import { getAllProducts } from "../../Redux/Product/Actions";
const ProductList = (props) => {
  const page = props.page;
  useEffect(() => {
    if (props.products.length === 0) props.getAllProducts(page);
  }, []);
  const SearchPaginate = (page, pageSize) => {
    props.setPage(page);
    props.getAllProducts(page);
  };

  return (
    <>
      {props.products.length > 0 ? (
        <>
          <Row gutter={[16, 16]}>
            {props.products.map((product) => (
              <Col className="gutter-row" span={8} key={product.id}>
                <Card
                  style={{ width: 240, height: "max-content", marginTop: "1rem" }}
                  size="small"
                  bordered={false}
                  cover={<img alt="example" src={product.image} height={300} />}
                >
                  <div style={{ textAlign: "center" }}>
                    <div>{product.name}</div>
                    <div>{product.description}</div>
                    <div>Price :{product.price}$</div>
                  </div>
                  {localStorage.getItem("roleId") !== "1" && (
                    <div style={{ textAlign: "center", margin: "1rem 0" }}>
                      <Button
                        type="primary"
                        style={{ borderRadius: "8px" }}
                        onClick={() => props.addToCart(product)}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
          <Row gutter={24}>
            <Col span={24} align="right" style={{ margin: "1rem 0" }}>
              <Pagination
                onChange={SearchPaginate}
                total={props.productsCount}
                showTotal={(total, range) => `${total} Products`}
                defaultCurrent={1}
              />
            </Col>
          </Row>
        </>
      ) : (
        <div
          style={{
            height: "300px",
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2>No Procucts</h2>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.ProductReducer.products);
  return {
    products: state.ProductReducer.products,
    productsCount: state.ProductReducer.productsCount,
    userData: state.UserReducer.userData,
  };
};
const mapDispatchToProps = { getAllProducts };

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
