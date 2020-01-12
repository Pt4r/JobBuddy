/*!

=========================================================
* Now UI Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.3.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";
import ClientLayout from "layouts/Client.jsx";
import HrLayout from "layouts/Hr.jsx";

import Index from "views/Pages/LandingPage.jsx";
import AuthLayout from "layouts/Auth.jsx";
import Register from "views/Pages/RegisterPage";
import PageNotFound from "views/Pages/PageNotFound.jsx";

import AuthorizeRoute from 'components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from 'components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from 'components/api-authorization/ApiAuthorizationConstants';


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route exact path='/' component={Index} />

    <Route
        path="/admin"
        render={props => {
          return <AdminLayout {...props} />;
        }}
      />
      <Route
        path="/client"
        render={props => {
          return <ClientLayout {...props} />;
        }}
      />
      <Route
        path="/hr"
        render={props => {
          return <HrLayout {...props} />;
        }}
      />
      <Route
        path="/auth"
        render={props => {
          return <AuthLayout {...props} />;
        }}
      />
      <Route
        path="/register"
        render={props => {
          return <Register {...props} />;
        }}
      />
      <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />

      {/*404 page */}
      {/* <Route component={PageNotFound} /> */}

      {/* Delete this after DEVELOPMENT */}
      {/* <Redirect to="/client/dashboard" /> */}
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
