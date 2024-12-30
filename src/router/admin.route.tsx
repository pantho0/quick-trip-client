import AddCar from "../pages/admin/car-management/AddCar";
import AllBookings from "../pages/admin/car-management/AllBookings";
import AllCars from "../pages/admin/car-management/AllCars";
import CarDetails from "../pages/admin/car-management/CarDetails";
import Dashboard from "../pages/Dashboard";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "Cars Management",
    children: [
      {
        name: "Add Car",
        path: "add-car",
        element: <AddCar />,
      },
      {
        name: "All Cars",
        path: "all-cars",
        element: <AllCars />,
      },
      {
        path: "car-details/:id",
        element: <CarDetails />,
      },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "All Bookings",
        path: "all-bookings",
        element: <AllBookings />,
      },
    ],
  },
];
