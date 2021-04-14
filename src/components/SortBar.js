import React from "react";
import { useGlobalContext } from "../context";
import "./SortBar.css";
import { SORT_PRICE, SORT_BRAND, SORT_MODEL } from "../reducer/constants";

const SortBar = () => {
  const { setApi, handleChange } = useGlobalContext();
  return (
    <div className="sort-cont">
      <div className="sort-left">
        <button onClick={() => setApi("guitars")} className="view-btn">
          Guitars
        </button>
        <button onClick={() => setApi("basses")} className="view-btn">
          Basses
        </button>
      </div>

      <div className="sort-right">
        <select
          className="view-btns"
          onChange={(e) => handleChange(e.target.value)}
        >
          <option className="view-btn" value={SORT_BRAND}>
            Sort by Brand
          </option>

          <option className="view-btn" value={SORT_MODEL}>
            Sort by Model
          </option>
          <option className="view-btn" value={SORT_PRICE}>
            Sort by Price
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
