import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import MenuItem from "../pages/MenuItem/MenuItem";
import Dashboard from "../pages/Dashboard/Dashboard";
import Shop from "../pages/Shop/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/menuitem",
        element: <MenuItem />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
