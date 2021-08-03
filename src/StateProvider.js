import React, { createContext, useContext, useReducer } from "react";

export const StateProviderContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateProviderContext.Provider>
);

export const useStateValue = () => useContext(StateProviderContext);