import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import {
  FaHome
} from "react-icons/fa";
import { PiPlantBold } from "react-icons/pi";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { LuUserPen } from "react-icons/lu";
import useDocumentTitle from "../Components/Others/useDocumentTitle";


const DashboardLayout = () => {
    useDocumentTitle("Dashboard")
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 text-xl">Dashboard</div>
        </div>
        {/* Page content here */}
        <Outlet />
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <Link to="/" className="text-2xl lg:text-4xl font-bold text-green-600">
            PlantLab
          </Link>
           <hr />
          <ul className="space-y-2">
            <li>
              <NavLink to="/dashboard" className="flex items-center gap-2">
                <FaHome /> OverView
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/allplants" className="flex items-center gap-2">
                <PiPlantBold /> All Plants
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/myplants"
                className="flex items-center gap-2"
              >
                <LuUserPen /> My Plants
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/addplant" className="flex items-center gap-2">
                <MdOutlineLibraryAdd /> Add Plants
              </NavLink>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
