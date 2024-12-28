import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { globalPaths } from "./global.routes";
import { routeGenerator } from "../utils/routeGenerator";
import Login from "../pages/Login";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { adminPaths } from "./admin.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(globalPaths),
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
