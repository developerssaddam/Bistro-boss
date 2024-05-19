import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Shop from "../pages/Shop/Shop";
import OurMenu from "../pages/OurMenu/OurMenu";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
