import React from "react";
import { Route } from "react-router-dom";
import App from "./Containers/App";
import Login from "../Containers/Login";

import ProtectedRoute from "./Components/ProtectedRoute";
const PublicRoutes = () => {
  return (
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/login" component={Login} />
      {/* <Route exact path={"/scanWindow"} component={ScanWindow} /> */}
      {/* <Route exact path={"/setup"} component={asyncComponent(() => import("./containers/Page/Setup/"))} /> */}
      {/* <Route exact path={"*"} component={AppHelper} /> */}
      <ProtectedRoute path="/dashboard" component={App} />
    </div>
  );
};

export default PublicRoutes;
