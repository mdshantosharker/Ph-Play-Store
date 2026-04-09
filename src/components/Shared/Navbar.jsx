import React from "react";
import logoImage from "../../assets/logo.png";
import github from "../../assets/Vector.png";
import { NavLink } from "react-router";
const Navbar = () => {
  const links = (
    <div className="flex gap-10 items-center">
      <NavLink
        to={"/"}
        className={({ isActive }) => `font-bold
          ${isActive ? "border-b-2 border-purple-600 text-purple-600 " : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to={"/apps"}
        className={({ isActive }) => `font-bold
          ${isActive ? "border-b-2 border-purple-600 text-purple-600 " : ""}`}
      >
        Apps
      </NavLink>
      <NavLink
        to={"/installedApps"}
        className={({ isActive }) => `font-bold
          ${isActive ? "border-b-2 border-purple-600 text-purple-600 " : ""}`}
      >
        Installation
      </NavLink>
    </div>
  );
  return (
    <div className=" shadow-sm">
      <div className="navbar bg-base-100 w-11/12 mx-auto">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-8 h-8" src={logoImage} alt="" />
            <a className="btn btn-ghost text-xl">HERO.IO</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="btn bg-linear-to-l from-[#9F62F2] to-[#632EE3]">
            <img src={github} alt="" />
            <a className="text-white">Contribute</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
