import Dashboard from "../pages/Dashboard";
import MyBookings from "../pages/user/MyBookings";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "My Bookings",
        path: "add-car",
        element: <MyBookings />,
      },
    ],
  },
];
