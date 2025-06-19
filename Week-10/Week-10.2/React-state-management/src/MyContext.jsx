/* import { useState, createContext } from "react";

const CountContext = createContext(); // created context

// created context provider in which i have wrapped the context which needed to the descendants which are wrapped under it.
function CountContextProvider({ children }) {
  const [count, setCount] = useState(0); // this is the thing we needed most

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext, CountContextProvider }; // exported this context and provider so we can use it in a app.jsx file.
 */