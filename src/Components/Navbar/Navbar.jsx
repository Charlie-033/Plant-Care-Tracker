import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Provider/AuthContext";
import { FaUserAltSlash } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useTheme } from "../../Provider/ThemeProvider";

const Navbar = () => {
  const { isDark, setIsDark } = useTheme();
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        // console.log(res)
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-base-100 px-3 md:px-8 lg:px-16 dark:bg-gray-900 ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-black dark:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark:bg-gray-900 dark:text-white"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allplants">All Plants</NavLink>
            </li>
            {user?.email && <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>}
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            data-tooltip-id="logo-tooltip"
            data-tooltip-content="PlantLab"
            src="https://i.ibb.co/xtT2vBWq/logo-removebg-preview.png"
            alt=""
            className="w-7 md:w-10 lg:w-15 hidden md:block  dark:bg-gray-900 rounded-full"
          />

          <Link to="/" className="text-2xl lg:text-4xl font-bold text-green-600">
            PlantLab
          </Link>
        </div>
      </div>
      {/* Navbar in large screen */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">
          {[
            { to: "/", label: "Home" },
            { to: "/allplants", label: "All Plants" },
            { to: "/about-us", label: "About Us"},
            { to: "/blog", label: "Blog"},
            { to: '/support', label: "Support"}
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 font-semibold rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-green-600 text-white border border-green-700 shadow-md"
                      : "bg-base-100 text-gray-800 hover:bg-green-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-green-700"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
            
          ))}
           {user?.email && [
            { to: '/dashboard', label: "Dashboard"}
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `px-4 py-2 font-semibold rounded-md transition-colors duration-300 ${
                    isActive
                      ? "bg-green-600 text-white border border-green-700 shadow-md"
                      : "bg-base-100 text-gray-800 hover:bg-green-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-green-700"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
            
          ))}
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center gap-2 px-1.5 py-1.5 text-sm font-semibold rounded-full transition-colors duration-300 
             bg-gray-100 text-gray-800 border border-gray-300 
             hover:bg-gray-200 
             dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <span
          data-tooltip-id="user-tooltip"
          className="cursor-pointer"
          data-tooltip-content={user?.displayName || "User Unavailable"}
          data-tooltip-delay-hide={500}
        >
          {user?.photoURL ? (
            <img alt="" src={user.photoURL} className="rounded-full w-10 " />
          ) : (
            <FaUserAltSlash className="text-2xl text-green-800" />
          )}
          <Tooltip id="user-tooltip" place="bottom" />
        </span>
        {user ? (
          <button
            onClick={handleLogOut}
            className="px-4 py-1.5 rounded-full border border-green-600 text-gray-800 font-semibold text-sm hover:bg-green-100 transition-colors duration-300 dark:border-green-400 dark:text-green-200 dark:hover:bg-green-800"
          >
            Log Out
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/auth/login">
              <button className="px-4 py-1.5 rounded-full border border-green-600 text-gray-800 font-semibold text-sm hover:bg-green-100 transition-colors duration-300 dark:border-green-400 dark:text-green-200 dark:hover:bg-green-800">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
