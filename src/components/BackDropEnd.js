import React from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
import "./BackDrop.css";

const BackDropEnd = () => {
  const { back, setBack, message } = useGlobalContext();
  if (back) {
    return (
      <div className="backdrop">
        <Link to="/" className="message-link" onClick={() => setBack(!back)}>
          <div className="message-container">
            <h1 className="message">{message}</h1>
          </div>
        </Link>
      </div>
    );
  }
  return null;
};

export default BackDropEnd;
