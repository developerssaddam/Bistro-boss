import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Shop from "../pages/Shop/Shop";
import OurMenu from "../pages/OurMenu/OurMenu";

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
        element: <OurMenu />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
    ],
  },
]);

export default router;
