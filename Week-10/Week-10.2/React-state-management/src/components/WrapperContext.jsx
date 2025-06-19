import { useState, createContext } from "react";

const CountContext = createContext(); // created context

function WrapperContext({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export { CountContext,WrapperContext };
