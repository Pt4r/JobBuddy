/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/TableList.jsx";
import UserPage from "views/UserPage.jsx";
import LoginPage from "views/Pages/LoginPage";
import RegisterPage from "views/Pages/RegisterPage";
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/register",
    name: "Register",
    short: "Register",
    mini: "RP",
    icon: "tech_mobile",
    component: RegisterPage
  },
  {
    path: "/login",
    name: "Login",
    short: "Login",
    mini: "LP",
    icon: "users_circle-08",
    component: LoginPage
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin"
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "design-2_ruler-pencil",
    component: Typography,
    layout: "/admin"
  },
  {
    collapse: true,
    path: ApplicationPaths.Profile,
    name: "Account",
    state: "openComponents",
    icon: "education_atom",
    views: [
      {
        path: ApplicationPaths.LogOut,
        name: "Log out",
        mini: "LO",
        component: ApiAuthorizationRoutes
      }
    ]
  }
];
export default dashRoutes;
