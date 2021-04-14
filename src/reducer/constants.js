export const LOADING_TRUE = "LOADING_TRUE";
export const LOADING_FALSE = "LOADING_FALSE";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const SORT_BRAND = "SORT_BRAND";
export const SORT_MODEL = "SORT_MODEL";
export const SORT_PRICE = "SORT_PRICE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHECKOUT = "CHECKOUT";
export const EMPTY_CART = "EMPTY_CART";

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};
