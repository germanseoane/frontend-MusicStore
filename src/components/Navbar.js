import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useGlobalContext } from "../context";
import "./Navbar.css";

const Navbar = () => {
  const { active, setActive, cart, message, alert } = useGlobalContext();
  return (
    <>
      <div className="main-navbar">
        <div className="logo">
          <Link to="/" className="navbar-link">
            <h2 className="incredible">Music Store</h2>
          </Link>
        </div>
        <h3 className="alert">{alert ? message : ""}</h3>
        <ul className="links">
          <Link className="navbar-links" to="/products">
            <h2>Products</h2>
          </Link>
          <Link to="/cart" className="navbar-links cart-link">
            <h2>{`Cart (${cart.length})`}</h2>
          </Link>
          <Link to="/about" className="navbar-links">
            <h2>About</h2>
          </Link>

          <GiHamburgerMenu
            className="hamburguer-icon"
            onClick={() => setActive(!active)}
          ></GiHamburgerMenu>
        </ul>
      </div>
      <div className="justify"></div>
    </>
  );
};

export default Navbar;
