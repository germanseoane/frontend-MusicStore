import React from "react";
import Loading from "../components/Loading";
import "./Products.css";
import { useGlobalContext } from "../context";
import { formatPrice } from "../reducer/constants";
import { Link } from "react-router-dom";
import SortBar from "../components/SortBar";

const ProductsScreen = () => {
  const { isLoading, products } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="products-container">
      <div className="sort-container">
        <SortBar />
      </div>
      <div className="products">
        {products.map((product) => {
          const { _id, brand, model, image, price } = product;
          return (
            <Link
              to={`/singleproduct/${_id}`}
              className="product-link"
              key={_id}
            >
              <div className="product">
                <img src={image} alt={brand} />
                <div className="info-container">
                  <h4>{brand}</h4>
                  <h4>{model}</h4>
                </div>
                <h3 style={{ color: " #5AC18E" }}>
                  Price: {formatPrice(price)}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default ProductsScreen;
