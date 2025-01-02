import ProtectedRoute from "../components/layouts/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import MyBookings from "../pages/user/MyBookings";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: (
      <ProtectedRoute role="user">
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "My Bookings",
        path: "add-car",
        element: (
          <ProtectedRoute role="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
