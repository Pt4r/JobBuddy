import LoginPage from "views/Pages/LoginPage";
import RegisterPage from "views/Pages/RegisterPage";

const pagesRoutes = [
  {
    path: "/login",
    name: "Login Page",
    short: "Login",
    mini: "LP",
    icon: "users_circle-08",
    component: LoginPage
  },
  {
    path: "/register",
    name: "Register Page",
    short: "Register",
    mini: "RP",
    icon: "tech_mobile",
    component: RegisterPage
  },
  {
    redirect: false,
    path: "/",
    pathTo: "authentication/login",
    name: "Register Page"
  }
];

export default pagesRoutes;
