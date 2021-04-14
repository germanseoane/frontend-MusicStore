import {
  LOADING_TRUE,
  LOADING_FALSE,
  GET_PRODUCTS,
  SORT_BRAND,
  SORT_PRICE,
  SORT_MODEL,
  ADD_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  EMPTY_CART,
} from "./constants";

const reducer = (state, action) => {
  if (action.type === LOADING_TRUE) {
    return { ...state, isLoading: true };
  }
  if (action.type === LOADING_FALSE) {
    return { ...state, isLoading: false };
  }
  if (action.type === GET_PRODUCTS) {
    return { ...state, products: action.payload };
  }
  if (action.type === SORT_PRICE) {
    let tempProducts = [];
    let { products } = state;
    tempProducts = products.sort((a, b) => {
      return a.price - b.price;
    });
    return { ...state, products: tempProducts };
  }
  if (action.type === SORT_BRAND) {
    let tempProducts = [];
    let { products } = state;
    tempProducts = products.sort((a, b) => {
      return a.brand.localeCompare(b.brand);
    });
    return { ...state, products: tempProducts };
  }
  if (action.type === SORT_MODEL) {
    let tempProducts = [];
    let { products } = state;
    tempProducts = products.sort((a, b) => {
      return a.model.localeCompare(b.model);
    });
    return { ...state, products: tempProducts };
  }
  if (action.type === ADD_TO_CART) {
    const alreadyInCart = state.cart.find(
      (guitar) => guitar.id === action.payload.id
    );
    if (alreadyInCart) {
      return { ...state, message: "Item already in Cart!" };
    }
    return {
      ...state,
      message: "Added to Cart!",
      cart: [...state.cart, action.payload],
    };
  }
  if (action.type === REMOVE_ITEM) {
    const { cart } = state;
    const newCart = cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === CHECKOUT) {
    return {
      ...state,
      cart: [],
      message: "Thanks! Click to buy again.",
    };
  }
  if (action.type === EMPTY_CART) {
    return { ...state, message: "Your cart is empty!" };
  }
  return { ...state };
};

export default reducer;
