const globalPaths = [
  {
    path: "about",
    element: "<AboutUs />",
  },
  {
    path: "booking",
    element: "<Booking />",
  },
  {
    path: "contact",
    element: "<Contact />",
  },
  {
    name: "Test Route",
    children: [
      { name: "Contact", path: "contact1", element: "<Contact1 />" },
      { name: "Contact", path: "contact2", element: "<Contact2 />" },
    ],
  },
];

const routeGenerator = (items) => {
  const routes = items.reduce((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);
  return routes;
};

console.log(JSON.stringify(routeGenerator(globalPaths)));
