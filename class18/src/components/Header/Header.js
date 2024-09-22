import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import "./Header.css";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Cloth Store</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          end // Ensures exact match for root path "/"
        >
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Cart ({cart.length})
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
