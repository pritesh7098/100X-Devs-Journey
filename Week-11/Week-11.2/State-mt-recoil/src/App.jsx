// A simple counter app with context api to overcome the problem of prop drilling

/* import React, { createContext, useContext, useState } from "react";

      // Create a context for the count state
      const CountContext = createContext();

      // Context provider component to manage the count state
      function CountContextProvider({ children }) {
        // State to hold the count value
        const [count, setCount] = useState(0);

        // Provide the count state and the function to update it to the children
        return (
          <CountContext.Provider value={{ count, setCount }}>
            {children}
          </CountContext.Provider>
        );
      }

      // Main App component
      const App = () => {
        return (
          <div>
            <Parent />
          </div>
        );
      };

      // Parent component that uses the CountContextProvider
      function Parent() {
        return (
          <CountContextProvider>
            <Incrase />
            <Decrease />
            <Value />
          </CountContextProvider>
        );
      }

      // Component to display the current count value
      const Value = React.memo(() => {
        // Access the count value from the context
        const { count } = useContext(CountContext);
        return <p>Count: {count}</p>;
      });

      // Component to increase the count value
      function Incrase() {
        // Access the count value and the function to update it from the context
        const { count, setCount } = useContext(CountContext);
        return <button onClick={() => setCount(count + 1)}>Increase</button>;
      }

      // Component to decrease the count value
      function Decrease() {
        // Access the count value and the function to update it from the context
        const { count, setCount } = useContext(CountContext);
        return <button onClick={() => setCount(count - 1)}>Decrease</button>;
      }

      export default App */

/* ******************************************************************************************************************************/

// So to tackle the problem of unneceesary rerenders we are using recoil state management library.

/* import React from "react";
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";

// Define a Recoil atom to hold the state of the counter
const counter = atom({
  key: "countState", // Unique ID for this atom
  default: 0, // Default value for the counter
});

// Main App component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

// Parent component that wraps child components with RecoilRoot
function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

// Component to display the current value of the counter
function Value() {
  const Cvalue = useRecoilValue(counter); // Access the current value of the counter atom

  return <p>Count: {Cvalue}</p>; // Display the counter value
}

// Component to increase the counter value
function Incrase() {
  const setCount = useSetRecoilState(counter); // Function to update the counter atom
  return (
    <button onClick={() => setCount((count) => count + 1)}> Increase </button> // Increase counter by 1
  );
}

// Component to decrease the counter value
function Decrease() {
  const setCount = useSetRecoilState(counter); // Function to update the counter atom
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button> // Decrease counter by 1
  );
}

export default App;
 */

/* ******************************************************************************************************************************/

// selectors in recoil State management tool.
//App.jsx
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  totalNotificationSelector,
} from "./atom";
import { useMemo } from "react";

function App() {
  return (
    <RecoilRoot>
      <Navbar />
    </RecoilRoot>
  );
}

function Navbar() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  // const totalNotificationCount = useMemo(() => {
  //   return networkCount + jobCount + messageCount;
  // }, [networkCount, jobCount, messageCount])

  return (
    <>
      <button>Home</button>

      <button>My network ({networkCount})</button>
      <button>Jobs ({jobCount})</button>
      <button>Messaging ({messageCount})</button>

      <button>Total Count({totalNotificationCount})</button>

      <button>Me</button>

      <CustomButton />
    </>
  );
}

function CustomButton() {
  const setNetworkCount = useSetRecoilState(networkAtom);
  const setJobCount = useSetRecoilState(jobsAtom);
  const setMessageCount = useSetRecoilState(messagingAtom);

  const increaseCounts = () => {
    setNetworkCount((prevCount) => prevCount + 1);
    setJobCount((prevCount) => prevCount + 1);
    setMessageCount((prevCount) => prevCount + 1);
  };

  return <button onClick={increaseCounts}>Increase Counts</button>;
}

export default App;
