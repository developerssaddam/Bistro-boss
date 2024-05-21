import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import Shop from "../pages/Shop/Shop";
import OurMenu from "../pages/OurMenu/OurMenu";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import UserCart from "../pages/UserDashboard/pages/UserCart/UserCart";
import UserHome from "../pages/UserDashboard/pages/UserHome/UserHome";
import UserReservation from "../pages/UserDashboard/pages/UserReservation/UserReservation";
import PaymentHistory from "../pages/UserDashboard/pages/PaymentHistory/PaymentHistory";
import UserReview from "../pages/UserDashboard/pages/UserReview/UserReview";
import UserBooking from "../pages/UserDashboard/pages/UserBooking/UserBooking";

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

  {
    path: "/dashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/dashboard",
        element: <UserHome />,
      },
      {
        path: "/dashboard/reservation",
        element: <UserReservation />,
      },
      {
        path: "/dashboard/payment",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/mycart",
        element: <UserCart />,
      },
      {
        path: "/dashboard/review",
        element: <UserReview />,
      },
      {
        path: "/dashboard/mybooking",
        element: <UserBooking />,
      },
    ],
  },
]);

export default router;
