import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = () => {
  const { active, setActive, cart } = useGlobalContext();

  return (
    <div className={active ? "sidedrawer show" : "sidedrawer"}>
      <ul className="sidedrawer-links" onClick={() => setActive(!active)}>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">{`Cart: (${cart.length})`}</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
