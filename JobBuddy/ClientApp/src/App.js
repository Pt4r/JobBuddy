import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
// import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import AdminLayout from "layouts/Admin.jsx";


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        {/* This is how we define ANY route */}
        <Route exact path='/' component={Home} />
        <Route path="/admin" render={props => <AdminLayout {...props} />} />

        {/* This is how we define any SECURE route */}
        {/* <AuthorizeRoute path='/fetch-data' component={FetchData} /> */}

        {/* These are the login/register routes */}
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
