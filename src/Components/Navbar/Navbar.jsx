import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../../Provider/AuthContext";
import { FaUserAltSlash } from "react-icons/fa";


const Navbar = ({isDark, setIsDark}) => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  // console.log(user?.photoURL);
  const handleLogOut = () => {
    logOut()
    .then(res => console.log(res))
    .catch(error => console.error(error));
  }

  return (
    <div className="navbar bg-yellow-100 px-3 md:px-8 lg:px-16">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allplants">All Plants</NavLink>
            </li>
            <li>
              <NavLink to="/addplant">Add Plants</NavLink>
            </li>
            <li>
              <NavLink to="/myplants">My Plants</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://i.ibb.co/xtT2vBWq/logo-removebg-preview.png"
            alt=""
            className="w-7 md:w-10 lg:w-15 hidden md:block bg-yellow-100"
          />
          <a className="text-2xl lg:text-4xl font-bold text-green-900">
            PlantLab
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${
                  isActive
                    ? "bg-yellow-100 text-green-800 rounded-full border-green-500 border-2"
                    : "bg-yellow-100 border-none hover:bg-yello-100 text-green-800"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${
                  isActive
                    ? "bg-yellow-100 text-green-800 rounded-full border-green-500 border-2"
                    : "bg-yellow-100 border-none hover:bg-yello-100 text-green-800"
                }`
              }
              to="/allplants"
            >
              All Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${
                  isActive
                    ? "bg-yellow-100 text-green-800 rounded-full border-green-500 border-2"
                    : "bg-yellow-100 border-none hover:bg-yello-100 text-green-800"
                }`
              }
              to="/addplant"
            >
              Add Plants
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `btn font-bold ${
                  isActive
                    ? "bg-yellow-100 text-green-800 rounded-full border-green-500 border-2"
                    : "bg-yellow-100 border-none hover:bg-yello-100 text-green-800"
                }`
              }
              to="/myplants"
            >
              My Plants
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        <button className='btn btn-secondary' onClick={() =>setIsDark(!isDark)}>
                {isDark ? "Light Mode" : "Dark Mode"}
            </button>
        <span className={`cursor-pointer tooltip tooltip-bottom`} data-tip={user?.displayName}>
          {
            user?.photoURL ? (
              <img alt="" src={user.photoURL} className="rounded-full w-10 "/>
            ) : (<FaUserAltSlash className="text-2xl text-green-800"/>)
          }
        </span>
        {user ? (
          <>
            <Link to="/auth/login">
              <button onClick={handleLogOut} className="btn btn-outline btn-success text-green-800 font-bold rounded-full">
                LogOut 
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/auth/login">
              <button className="btn btn-outline btn-success text-green-800 font-bold rounded-full">
                Login
              </button>
            </Link>
            <Link to="/auth/register">
              <button className="btn btn-outline btn-success text-green-800 font-bold rounded-full">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
