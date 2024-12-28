import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { globalPaths } from "./global.routes";
import { routeGenerator } from "../utils/routeGenerator";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../components/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(globalPaths),
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
