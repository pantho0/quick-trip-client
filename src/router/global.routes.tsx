import AboutUs from "../pages/AboutUs";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Home from "../pages/Home";

export const globalPaths = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "About",
    path: "about",
    element: <AboutUs />,
  },
  {
    name: "Booking",
    path: "booking",
    element: <Booking />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
];
