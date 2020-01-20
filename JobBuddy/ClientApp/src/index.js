import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router} from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";


const hist = createBrowserHistory();


ReactDOM.render(
  <Router history={hist}>
        <App />
  </Router>,
  document.getElementById("root")
);

