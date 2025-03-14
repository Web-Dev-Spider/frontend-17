import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Aboutus from "../pages/Aboutus";
import Home from "../pages/Home";
import Settings from "../pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/aboutus',
        element: <Aboutus />
      }
    ],
  },
]);

export default router;
