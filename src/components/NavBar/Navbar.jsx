import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { BsCart2 } from "react-icons/bs";
import useCarts from "../../hooks/useCarts";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  // load carts data by tanstack query
  const [carts] = useCarts();

  // handleLogout user
  const handleLoginUser = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfull!",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>

      <li>
        <NavLink to="/menuitem">Our-Menu</NavLink>
      </li>

      <li>
        <NavLink to="/shop/salad">shop</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-gray-950 fixed z-50 opacity-75 text-white max-w-[1920px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="menu"
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="text-sm font_cinzel">
          <h1 className="font-semibold">BISTRO BOSS</h1>
          <p className="text-xs tracking-[3px] font-medium">Restaurant</p>
        </Link>
      </div>

      <div className="navbar-end w-2/3">
        <Link to="/dashboard/mycart">
          <div className="flex items-center gap-1 mr-1">
            <BsCart2 className="text-[#c7b438] font-bold" />
            <div className="badge badge-sm badge-warning">+{carts.length}</div>
          </div>
        </Link>

        <div className="hidden lg:flex">
          <ul id="menu" className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        {user ? (
          <>
            <button onClick={handleLoginUser} className="btn btn-xs">
              Logout
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="profile"
                    src={
                      user
                        ? user.photoURL
                        : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-xs">Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
