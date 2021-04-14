import React from "react";
import { useGlobalContext } from "../context";
import "./CartScreen.css";
import { formatPrice } from "../reducer/constants";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const CartScreen = () => {
  const {
    cart,
    removeItem,
    checkOut,
    handleCartChange,
    handleCartChangeMin,
  } = useGlobalContext();

  return (
    <main className="cart-container">
      <div className="cart-item">
        <h3>Quantity:</h3>
        <h3 className="clear">Brand:</h3>
        <h3 className="clear">Model:</h3>
        <h3>Price:</h3>
        <button className="opacity">Remove Item</button>
      </div>
      {cart.map((item) => {
        const { id, image, brand, model, price, qty } = item;
        return (
          <div className="cart-item" key={id}>
            <div className="img-container">
              <img src={image} alt={brand} />
              <div>
                <p style={{ color: "#3a9467" }}>
                  <BsChevronDoubleUp onClick={() => handleCartChange(id)} />
                </p>
                <p className="between" style={{ color: "#3a9467" }}>
                  ({qty})
                </p>
                <BsChevronDoubleDown
                  style={{ color: "#3a9467" }}
                  onClick={() => handleCartChangeMin(id)}
                />
              </div>
            </div>

            <h4 className="clear">{brand}</h4>
            <h4 className="clear">{model}</h4>
            <h4 style={{ color: "#4cad7d" }}>
              Price: {formatPrice(price * qty)}
            </h4>

            <button className="cart-remove" onClick={() => removeItem(id)}>
              Remove Item
            </button>
          </div>
        );
      })}
      <div className="total">
        <h3 style={{ color: "#2d8b5c" }}>
          Total:
          {formatPrice(
            cart.reduce((total, item) => {
              total += item.price * item.qty;
              return total;
            }, 0)
          )}
        </h3>
        <button className="checkout" onClick={() => checkOut()}>
          Checkout
        </button>
      </div>
    </main>
  );
};

export default CartScreen;
