import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart-icon.png";

function Navbar({ cart }) {
  const count = (cart.filter((product) => product.quantity)).length;
  return (
    <div className="navbar-container">
      <h1>GarliCart</h1>
      <ul className="navbar-links-container">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>
            <img className="cart-logo" src={cartIcon} width="40px" />
            <small>{count}</small>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
