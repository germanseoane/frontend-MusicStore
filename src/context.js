import React, { useContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer/reducer";
import {
  LOADING_TRUE,
  LOADING_FALSE,
  GET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_ITEM,
  CHECKOUT,
  EMPTY_CART,
} from "./reducer/constants";

const Appcontext = React.createContext();
const API_ENDPOINT = "https://music-store-backend.herokuapp.com/api/";

const initialState = {
  isLoading: false,
  message: "",
  cart: [],
  products: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [active, setActive] = useState(false);
  const [api, setApi] = useState("guitars");
  const [back, setBack] = useState(false);
  const [alert, setAlert] = useState(false);

  const getGuitars = async (api) => {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(`${API_ENDPOINT}${api}`);
    dispatch({ type: GET_PRODUCTS, payload: response.data });
    dispatch({ type: LOADING_FALSE });
  };

  useEffect(() => {
    getGuitars(api);
  }, [api]);

  const addToCart = ({ image, model, brand, price, qty, id, inStock }) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { image, model, brand, price, qty, id, inStock },
    });
    setAlert(true);
    setInterval(() => {
      setAlert(false);
    }, 1500);
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };
  const checkOut = async () => {
    if (state.cart.length === 0) {
      dispatch({ type: EMPTY_CART });
      setAlert(true);
      setInterval(() => {
        setAlert(false);
      }, 1500);
      return;
    }
    
    if (window.innerWidth > 926) {
      window.print();
    }
    dispatch({ type: CHECKOUT });

    setBack(!back);
  };
  const handleChange = (e) => {
    dispatch({ type: e });
  };

  return (
    <Appcontext.Provider
      value={{
        ...state,
        active,
        setActive,
        api,
        setApi,

        addToCart,
        removeItem,
        checkOut,
        back,
        setBack,
        alert,
        handleChange,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, AppProvider };
