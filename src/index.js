import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.querySelector("#root"));
