import React from "react";
import { NavLink } from "react-router-dom";

function AppRouter() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="about">Contact</NavLink>
      <NavLink to="/services">Services</NavLink>
    </div>
  );
}

export default AppRouter;
