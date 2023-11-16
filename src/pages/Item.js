import React from "react";
import { NavLink } from "react-router-dom";

const productsWeSell = [
  { name: "Mac", id: 1 },
  { name: "iPhone", id: 2 },
  { name: "iPad", id: 3 },
  { name: "Apple Watch", id: 4 },
  { name: "AirPods", id: 5 },
];

function Items() {
  return (
    <div>
      {productsWeSell.map((item) => {
        return (
          <NavLink key={item.id} to={`/items/${item.id}`}>
            <h1>{item.name}</h1>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Items;
