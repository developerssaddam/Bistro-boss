import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import loaderImg from "../assets/others/loader2.gif";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isAdminLoadin] = useAdmin();
  const location = useLocation();

  if (loading && isAdminLoadin) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <img src={loaderImg} alt="" />
      </div>
    );
  }

  if (user && role === "admin") {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
};

export default AdminRoute;
