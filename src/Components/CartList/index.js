import React from "react";
import { Col, Row, Card, Button, Divider, message } from "antd";
import { connect } from "react-redux";
import { deleteFromCart, removeCartFromStorage } from "../../Redux/Cart/Actions";
import { withRouter } from "react-router";
import { DeleteOutlined } from "@ant-design/icons";
const CartList = (props) => {
  const deleteProduct = (product) => {
    props.deleteFromCart(product);
  };
  return (
    <>
      <Divider orientation="left">
        <h4>Cart Items</h4>
      </Divider>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card>
            {props.cartProducts.length > 0 ? (
              props.cartProducts.map((product) => {
                return (
                  <Card key={product.id} style={{ marginTop: 16 }} title={product.name}>
                    <div
                      style={{
                        width: "70%",
                        alignItems: "center",
                        display: "flex",
                        // justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <img src={product.image} width="60%" alt="product" />
                      </div>
                      <div>
                        <h4>{product.description}</h4>
                        <h4>Price : {product.price}$</h4>
                        <h4>Amount : {product.count}$</h4>
                      </div>
                    </div>
                    <div style={{ cursor: "pointer" }} onClick={() => deleteProduct(product)}>
                      <DeleteOutlined /> remove product
                    </div>
                  </Card>
                );
              })
            ) : (
              <Card style={{ marginTop: 16, textAlign: "center" }}>
                <h3>No Products</h3>
              </Card>
            )}
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Card type="inner" title="Order Summary">
              <div
                style={{
                  width: "50%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>Total</div>
                <div>
                  {props.cartProducts.reduce((acc, current) => {
                    return acc + current.count * current.price;
                  }, 0)}
                </div>
                {/* <div>{total}</div> */}
              </div>
              <Divider />

              <div style={{ textAlign: "center" }}>
                <Button
                  size="large"
                  type="primary"
                  style={{ borderRadius: "10px" }}
                  disabled={props.cartProducts.length === 0}
                  onClick={() => {
                    if (localStorage.getItem("token") === null) {
                      props.history.push("/login");
                    } else {
                      props.history.push("/");
                      message.success("Order Created Successfully");
                      props.removeCartFromStorage();
                    }
                  }}
                >
                  ChekOut
                </Button>
              </div>
            </Card>
          </Card>
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartProducts: state.CartReducer.cartProducts,
  };
};
const mapDispatchToProps = { deleteFromCart, removeCartFromStorage };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartList));
