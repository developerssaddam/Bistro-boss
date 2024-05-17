import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "./Main.css";
import Navbar from "../components/NavBar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="outlet_area">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
