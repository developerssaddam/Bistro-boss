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
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../pages/UserDashboard/adminPages/AdminHome/AdminHome";
import AdminAddItem from "../pages/UserDashboard/adminPages/AdminAddItem/AdminAddItem";
import ManageBooking from "../pages/UserDashboard/adminPages/ManageBooking/ManageBooking";
import AllUsers from "../pages/UserDashboard/adminPages/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/UserDashboard/adminPages/ManageItems/ManageItems";
import EditMenuItem from "../pages/UserDashboard/adminPages/EditMenuItem/EditMenuItem";
import Payment from "../pages/UserDashboard/Payment/Payment";

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
    element: (
      <PrivateRoute>
        <UserDashboard></UserDashboard>
      </PrivateRoute>
    ),
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
        path: "/dashboard/payment/history",
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

      {
        path: "/dashboard/payment",
        element: <Payment />,
      },

      // AdminRoutes
      {
        path: "/dashboard/admin",
        element: <AdminHome />,
      },

      {
        path: "/dashboard/admin/additem",
        element: (
          <AdminRoute>
            <AdminAddItem />
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/admin/manageItems",
        element: <ManageItems />,
      },

      {
        path: "/dashboard/admin/manageItems/edit/:id",
        element: <EditMenuItem />,
      },

      {
        path: "/dashboard/admin/manageBooking",
        element: <ManageBooking />,
      },

      {
        path: "/dashboard/admin/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
