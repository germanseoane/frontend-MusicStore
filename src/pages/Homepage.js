import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const AboutScreen = () => {
  return (
    <div className="home-container">
      <Link to="/products" className="home-link">
        <h1>Music Store</h1>
        <h3 className="btn">Check out our products</h3>
      </Link>
      <h4>API_ENDPOINTS:</h4>
      <h5>https://music-store-backend.herokuapp.com/api/guitars</h5>
      <h5>https://music-store-backend.herokuapp.com/api/basses</h5>

      <img
        className="home-img"
        src="https://www.spottedbylocals.com/cologne/files/music-store-cologne-by-stephan-wehrle.jpg"
        alt=""
      ></img>
      <p style={{ color: "grey", fontSize: "0.8rem", marginTop: "2px" }}>
        Built with Node and React
      </p>
    </div>
  );
};

export default AboutScreen;
