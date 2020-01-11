import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import PageNotFound from "./views/Pages/PageNotFound";
import Pages from "layouts/Pages/Pages.jsx";

// import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import AdminLayout from "layouts/Dashboard/Admin";
import Login from './views/Pages/LoginPage';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Switch>

      <Layout>

        {/* This is how we define ANY route */}
        <Route exact path='/' component={Pages} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route path="/login" component={Login} />

        {/* This is how we define any SECURE route */}
        {/* <AuthorizeRoute path='/fetch-data' component={FetchData} /> */}

        {/* These are the login/register routes */}
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />

        </Layout>
        
        {/*404 page */}
        <Route component={PageNotFound} />

      </Switch>
    );
  }
}
