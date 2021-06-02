import React from "react";
import { Result, Button } from "antd";
import { withRouter } from "react-router";
import { connect } from "react-redux";
const NotAuthorizationPage = (props) => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button
          type="primary"
          onClick={() => {
            props.history.push("/");
            props.returnStatus();
          }}
        >
          Back Home
        </Button>
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return { returnStatus: () => dispatch({ type: "RETURN_STATUS" }) };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NotAuthorizationPage));
