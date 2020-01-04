import Pages from "layouts/Pages/Pages.jsx";
import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "./../views/Forms/Login.jsx";

var indexRoutes = [
  { path: "/login", name: "Login", component: Login },
  { path: "/pages", name: "Paginas", component: Pages },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
