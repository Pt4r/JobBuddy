import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router} from "react-router-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";


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
        path="/mentor"
        render={props => {
          return <AuthLayout {...props} />;
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

