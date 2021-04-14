import React from "react";
import { useGlobalContext } from "../context";
import "./BackDrop.css";

const BackDrop = () => {
  const { active, setActive } = useGlobalContext();
  if (active) {
    return <div className="backdrop" onClick={() => setActive(!active)}></div>;
  }
  return null;
};

export default BackDrop;
