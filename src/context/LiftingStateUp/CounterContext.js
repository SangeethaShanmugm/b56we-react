import React, { createContext, useState } from "react";

export const CounterContext = createContext(); //creating context

//creating provider
export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(10);
    return (
        //passing provider => context.Provider
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterContext;
