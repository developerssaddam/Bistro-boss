import { Link, NavLink } from "react-router-dom";
import shopImg from "../../assets/icon/shopicon.png";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/menuitem">Menu-item</NavLink>
      </li>
      <li>
        <NavLink to="/shop">
          shop
          <img className="w-6" src={shopImg} alt="" />
        </NavLink>
      </li>
    </>
  );

  const user = true;

  return (
    <div className="navbar bg-gray-950 fixed z-50 opacity-75 text-white">
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
        <div className="hidden lg:flex">
          <ul id="menu" className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        {user ? (
          <>
            <button className="btn btn-xs">Logout</button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button className="btn btn-xs">Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
