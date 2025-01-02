import ProtectedRoute from "../components/layouts/ProtectedRoute";
import AddCar from "../pages/admin/car-management/AddCar";
import AllBookings from "../pages/admin/car-management/AllBookings";
import AllCars from "../pages/admin/car-management/AllCars";
import CarDetails from "../pages/admin/car-management/CarDetails";
import UpdateCar from "../pages/admin/car-management/UpdateCar";
import Dashboard from "../pages/Dashboard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: (
      <ProtectedRoute role="admin">
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    name: "Cars Management",
    children: [
      {
        name: "Add Car",
        path: "add-car",
        element: (
          <ProtectedRoute role="admin">
            <AddCar />
          </ProtectedRoute>
        ),
      },
      {
        name: "All Cars",
        path: "all-cars",
        element: (
          <ProtectedRoute role="admin">
            <AllCars />
          </ProtectedRoute>
        ),
      },
      {
        path: "car-details/:id",
        element: (
          <ProtectedRoute role="admin">
            <CarDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "car-update/:id",
        element: (
          <ProtectedRoute role="admin">
            <UpdateCar />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Bookings",
        path: "all-bookings",
        element: (
          <ProtectedRoute role="admin">
            <AllBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
];
