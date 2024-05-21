import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { LuMenu } from "react-icons/lu";
import { MdShoppingBag } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const UserDashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | User Dashboard</title>
      </Helmet>

      <div className="flex gap-10">
        <div className="sidebar w-1/6 px-5 py-10 bg-[#D1A054] min-h-screen">
          <div className="uppercase space-y-1 mb-14 font_cinzel font-bold">
            <h2 className="text-xl">bistro boss</h2>
            <p className="tracking-widest">Restaurant</p>
          </div>
          <ul>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <IoHome className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/dashboard">
                user home
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <FaCalendarAlt className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/dashboard/reservation">
                Reservation
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <MdOutlinePayment className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/dashboard/payment">
                Payment history
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <IoCartOutline className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/dashboard/mycart">
                my Cart
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <MdOutlineReviews className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/dashboard/review">
                add review
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <TbBrandBooking className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/dashboard/mybooking">
                my booking
              </NavLink>
            </li>
          </ul>
          <div className="divider"></div>

          <ul>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <IoHome className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/">
                home
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <LuMenu className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/menuitem">
                menu
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <MdShoppingBag className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/shop/salad">
                shop
              </NavLink>
            </li>
            <li className="flex items-center gap-2 uppercase text-gray-700 mb-3">
              <MdEmail className="text-xl font-bold text-gray-900" />
              <NavLink className="font-semibold" to="/contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-5/6">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
