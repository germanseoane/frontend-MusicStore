import React from "react";
import { useParams } from "react-router";
import { useGlobalContext } from "../context";
import { formatPrice } from "../reducer/constants";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { products, addToCart } = useGlobalContext();
  const { id } = useParams();
  const product = products.find((product) => product._id === id);
  const { brand, model, price, description, inStock, image } = product;
  const [readMore, setReadMore] = React.useState(true);
  const [qty, setQty] = React.useState(1);

  if (qty < 1) {
    setQty(1);
  }
  if (qty > inStock) {
    setQty(inStock);
  }

  return (
    <main className="single-product">
      <div className="single-left">
        <img src={image} alt={brand} />
      </div>
      <div className="single-right">
        <h2>
          {brand}: {model}
        </h2>
        <h3 style={{ color: "#5ac18e" }}>Price: {formatPrice(price)}</h3>
        <h4 style={{ color: "rgb(180, 21, 21)" }}>In Stock: {inStock}</h4>
        <p>
          {readMore ? description.substring(0, 220) : description}
          <button className="readmore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "...Read More" : " Read Less."}
          </button>
        </p>
        <button
          className="add-btn"
          onClick={() =>
            addToCart({ image, model, brand, price, qty, id, inStock })
          }
        >
          Add to Cart
        </button>

        <div className="qty-container">
          More than one?
          <input
            type="number"
            value={qty}
            className="single-qty"
            onChange={(e) => setQty(e.target.value)}
          ></input>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
