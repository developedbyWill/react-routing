import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to our home page!</p>
      <NavLink to="/items">Items Page</NavLink>
    </div>
  );
}

export default Home;
