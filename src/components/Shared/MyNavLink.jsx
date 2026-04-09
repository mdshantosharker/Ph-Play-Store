import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `font-bold
          ${isActive ? "border-b-2 border-purple-600 text-purple-600 " : ""}`}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
