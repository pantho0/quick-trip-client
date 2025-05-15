import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { globalPaths } from "./global.routes";
import { routeGenerator } from "../utils/routeGenerator";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DashboardLayout from "../components/layouts/DashboardLayout";
import { adminPaths } from "./admin.route";
import { userPaths } from "./user.route";
import ProtectedRoute from "../components/layouts/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(globalPaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />{" "}
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
