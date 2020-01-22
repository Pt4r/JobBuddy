import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v=1.3.0";
import "assets/css/demo.css";

import AdminLayout from "layouts/Admin.jsx";
import ClientLayout from "layouts/Client.jsx";
import MentorLayout from "layouts/Mentor.jsx"
import HrLayout from "layouts/Hr.jsx";

import Index from "views/Pages/LandingPage.jsx";
import PageNotFound from "views/Pages/PageNotFound.jsx";

import AuthorizeRoute from 'components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from 'components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from 'components/api-authorization/ApiAuthorizationConstants';


const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>

      <Route exact path='/' component={Index} />

      <AuthorizeRoute  
        path="/admin"
        allowedRoles = {["Admin"]}
        render={props => {
          return <AdminLayout {...props} />;
        }}
            />
      
      <AuthorizeRoute 
        path="/client"
        allowedRoles = {["Admin","Client"]}
        render={props => {
          return <ClientLayout {...props} />;
        }}
      />
      <AuthorizeRoute
        path="/hr"
        allowedRoles = {["Admin","HR"]}
        render={props => {
          return <HrLayout {...props} />;
        }}
      />
        <AuthorizeRoute
        path="/mentor"
        allowedRoles = {["Admin","Mentor"]}
        render={props => {
          return <MentorLayout {...props} />;
        }}
      />

      <Route path="/chat"/>
      
      <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />

        {/*404 page */}
      <Route component={PageNotFound} />

        {/* Delete this after DEVELOPMENT */}
      {/* <Redirect to="/client/dashboard" /> */} 
      
    </Switch>
  </Router>,
  document.getElementById("root")
);
