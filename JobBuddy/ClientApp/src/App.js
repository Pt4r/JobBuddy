import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import Login from "./views/Pages/LoginPage";
import Logout from "./views/Pages/LoginPage";
import RegisterPage from "./views/Pages/RegisterPage";
import PageNotFound from "./views/Pages/PageNotFound";
// import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import AdminLayout from "layouts/Dashboard/Admin";


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>
        {/* This is how we define ANY route */}
        <Route exact path='/' component={Login} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/logout" component={Logout} />

        {/* This is how we define any SECURE route */}
        {/* <AuthorizeRoute path='/fetch-data' component={FetchData} /> */}

        {/* These are the login/register routes */}
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        
        {/*404 page */}
        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
