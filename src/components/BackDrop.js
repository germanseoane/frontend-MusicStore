import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import "./BackDrop.css";

const BackDrop = () => {
  const { active, setActive, message } = useGlobalContext();
  if (active) {
    return (
      <div className="backdrop" onClick={() => setActive(!active)}>
        <Link to="/" className="message-link">
          <div className="message-container">
            <h1 className="message">{message}</h1>
          </div>
        </Link>
      </div>
    );
  }
  return null;
};

export default BackDrop;
