import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import "./Main.css";
import Navbar from "../components/NavBar/Navbar";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div className="max-w-[1920px] mx-auto">
      {noHeaderFooter || <Navbar />}
      <div className="outlet_area">
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
