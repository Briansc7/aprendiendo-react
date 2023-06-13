import { createContext, useReducer } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const cartReducer = (state, action) => {
    //action = {type, payload}
    switch (action.type) {
      case "addToCart":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };

      case "deleteById":
        let newArray = state.cart.filter(
          (product) => product.id !== action.payload
        );
        return { ...state, cart: newArray };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  let data = {
    state,
    dispatch,
    cart: state.cart,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
