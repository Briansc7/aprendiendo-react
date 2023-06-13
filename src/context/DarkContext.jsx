import { createContext, useReducer, useState } from "react";

export const DarkContext = createContext();

const initialState = {
  isDark: false,
};

const darkReducer = (state, action) => {
  switch (action.type) {
    case "changeMode":
      return { ...state, isDark: !state.isDark };
    default:
      return state;
  }
};

const DarkContextProvider = (children) => {
  const [state, dispatch] = useReducer(darkReducer, initialState);
  let data = {
    isDark: state.isDark,
    dispatch,
  };

  return <DarkContext.Provider value={data}>{children}</DarkContext.Provider>;
};

export default DarkContextProvider;
