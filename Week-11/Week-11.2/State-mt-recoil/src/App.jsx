// A simple counter app with context api to overcome the problem of prop drilling

import { useState } from "react";

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
/* import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
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
 */

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// Week : 11.2 : Recoil state management library ( Revised June 2025)
// Counter app code using simple useState hook - an unoptimal way bcz it leads to unncesarry rerendering.

/* export const App = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Recoil</h1>
      <Counter />
    </div>
  );
};

const CurrentCounter = ({ count }) => {
  return (
    <div style={{ fontSize: "24px", margin: "20px 0" }}>
      Current Count: {count}
    </div>
  );
};

const Inc = ({ setCount }) => {
  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      style={{
        margin: "0 10px",
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Increment
    </button>
  );
};

const Dec = ({ setCount }) => {
  return (
    <button
      onClick={() => setCount((c) => c - 1)}
      style={{
        margin: "0 10px",
        padding: "10px 20px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Decrement
    </button>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>A simple counter App</h2>
      <CurrentCounter count={count} />
      <div style={{ marginTop: "20px" }}>
        <Inc setCount={setCount} />
        <Dec setCount={setCount} />
      </div>
    </div>
  );
};

export default App; */

/* ******************************************************************************************************************************************** */

// with context api : as it solves the problem of prop drilling but not unnecesasry rerenders :

/* import React, { createContext, useContext, useState } from "react";
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Parent() {
  return (
    <CountContextProvider>
      <Incrase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

function Value() {
  const { count } = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App;
 */

/* ******************************************************************************************************************************************** */

// With RECOIL :

// Counter app code using simple useState hook - an unoptimal way bcz it leads to unncesarry rerendering.

/* import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atoms/counterAtom";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
 */

/* *************************** AI NOTES ************************** */

// ====================================================================
// REACT STATE MANAGEMENT COMPARISON
// Week 11.2 - Recoil State Management Library (Revised June 2025)
// ====================================================================

// ====================================================================
// APPROACH 1: SIMPLE useState HOOK
// ====================================================================
// ❌ PROBLEMS:
// - Prop drilling (passing props through multiple levels)
// - Unnecessary re-renders (when parent state changes, all children re-render)
// - State is local to component (can't be shared easily across distant components)

import React, { createContext, useContext } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState, atom } from "recoil";

// APPROACH 1: useState - Traditional React State
// export const App = () => {
//   return (
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>useState Approach</h1>
//       <Counter />
//     </div>
//   );
// };

// // 🏗️ Main Counter Component - This holds the state
// const Counter = () => {
//   // 📊 State lives here - when this changes, ALL children re-render
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>A Simple Counter App</h2>
//       {/*        📤 Props drilling - passing count down
//        */}{" "}
//       <CurrentCounter count={count} />
//       <div style={{ marginTop: "20px" }}>
//         {/*          📤 Props drilling - passing setCount down
//          */}{" "}
//         <Inc setCount={setCount} />
//         <Dec setCount={setCount} />
//       </div>
//     </div>
//   );
// };

// // 📺 Display Component - Only needs count value
// const CurrentCounter = ({ count }) => {
//   console.log("CurrentCounter re-rendered"); // 🔍 This will log on every state change
//   return (
//     <div style={{ fontSize: "24px", margin: "20px 0" }}>
//       Current Count: {count}
//     </div>
//   );
// };

// // ➕ Increment Button - Only needs setter function
// const Inc = ({ setCount }) => {
//   console.log("Inc component re-rendered"); // 🔍 This will log on every state change
//   return (
//     <button
//       onClick={() => setCount((c) => c + 1)} // 🔄 Update state using previous value
//       style={{
//         margin: "0 10px",
//         padding: "10px 20px",
//         backgroundColor: "#4CAF50",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Increment
//     </button>
//   );
// };

// // ➖ Decrement Button - Only needs setter function
// const Dec = ({ setCount }) => {
//   console.log("Dec component re-rendered"); // 🔍 This will log on every state change
//   return (
//     <button
//       onClick={() => setCount((c) => c - 1)} // 🔄 Update state using previous value
//       style={{
//         margin: "0 10px",
//         padding: "10px 20px",
//         backgroundColor: "#f44336",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Decrement
//     </button>
//   );
// };

// export default App;

// ====================================================================
// APPROACH 2: CONTEXT API
// ====================================================================
// ✅ SOLVES: Prop drilling
// ❌ STILL HAS: Unnecessary re-renders (all consumers re-render when context changes)
// 📝 NOTE: Context is React's built-in solution for global state

// 🏪 Create Context - This will hold our global state
// const CountContext = createContext();

// // 🎁 Context Provider - Wrapper that provides state to all children
// function CountContextProvider({ children }) {
//   // 📊 State lives in the provider
//   const [count, setCount] = useState(0);

//   // 📦 Provide both count value and setter to all children
//   return (
//     <CountContext.Provider value={{ count, setCount }}>
//       {children}
//     </CountContext.Provider>
//   );
// }

// // 🏗️ Parent Component - Wraps children with context provider
// function Parent() {
//   return (
//     <CountContextProvider>
//       <div style={{ padding: "20px", textAlign: "center" }}>
//         <h1>Context API Approach</h1>
//         <h2>Global State Counter</h2>

// {/*         🎯 No prop drilling needed! Components get data from context
//  */}        <Value />
//         <div style={{ marginTop: "20px" }}>
//           <Increase />
//           <Decrease />
//         </div>
//       </div>
//     </CountContextProvider>
//   );
// }

// // 📺 Value Display Component - Gets count from context
// function Value() {
//   // 🎣 useContext hook to access context data
//   const { count } = useContext(CountContext);
//   console.log("Value component re-rendered"); // 🔍 This logs on every context change

//   return (
//     <p style={{ fontSize: "24px", margin: "20px 0" }}>
//       Count: {count}
//     </p>
//   );
// }

// // ➕ Increase Button - Gets setter from context
// function Increase() {
//   // 🎣 Get both count (for current value) and setCount (to update)
//   const { count, setCount } = useContext(CountContext);
//   console.log("Increase component re-rendered"); // 🔍 This logs on every context change

//   return (
//     <button
//       onClick={() => setCount(count + 1)}
//       style={{
//         margin: "0 10px",
//         padding: "10px 20px",
//         backgroundColor: "#4CAF50",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Increase
//     </button>
//   );
// }

// // ➖ Decrease Button - Gets setter from context
// function Decrease() {
//   // 🎣 Get both count and setCount from context
//   const { count, setCount } = useContext(CountContext);
//   console.log("Decrease component re-rendered"); // 🔍 This logs on every context change

//   return (
//     <button
//       onClick={() => setCount(count - 1)}
//       style={{
//         margin: "0 10px",
//         padding: "10px 20px",
//         backgroundColor: "#f44336",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Decrease
//     </button>
//   );
// }

// // 🚀 Main App Component
// const App = () => {
//   return (
//     <div>
//       <Parent />
//     </div>
//   );
// };

// export default App;

// ====================================================================
// APPROACH 3: RECOIL STATE MANAGEMENT
// ====================================================================
// ✅ SOLVES: Both prop drilling AND unnecessary re-renders
// ✅ BENEFITS:
//   - Components only re-render when atoms they subscribe to change
//   - Fine-grained reactivity
//   - Better performance for large apps
//   - Atomic state management

// 🧪 ATOM DEFINITION (usually in separate file: store/atoms/counterAtom.js)
// const counterAtom = atom({
//   key: "counterState", // 🔑 Unique identifier for this atom
//   default: 0, // 🎯 Default/initial value
// });

// // 🚀 Main App Component - RecoilRoot provides Recoil context
// function App() {
//   return (
//     <RecoilRoot>
//       {" "}
//       {/* 🌳 RecoilRoot wraps the entire app */}
//       <div style={{ padding: "20px", textAlign: "center" }}>
//         <h1>Recoil Approach</h1>
//         <h2>Atomic State Management</h2>
//         <Counter />
//       </div>
//     </RecoilRoot>
//   );
// }

// // 🏗️ Counter Container - Just organizes the UI
// function Counter() {
//   return (
//     <div>
//       {/* 🎯 Each component subscribes only to what it needs */}
//       <CurrentCount />
//       <div style={{ marginTop: "20px" }}>
//         <Increase />
//         <Decrease />
//       </div>
//     </div>
//   );
// }

// // 📺 Display Component - Only subscribes to atom VALUE
// function CurrentCount() {
//   // 🎣 useRecoilValue: Subscribe to atom value (read-only)
//   // ⚡ This component ONLY re-renders when counterAtom changes
//   const count = useRecoilValue(counterAtom);
//   console.log("CurrentCount re-rendered"); // 🔍 Only logs when count actually changes

//   return (
//     <div style={{ fontSize: "24px", margin: "20px 0" }}>
//       Current Count: {count}
//     </div>
//   );
// }

// // ➕ Increase Button - Only subscribes to atom SETTER
// function Increase() {
//   // 🎣 useSetRecoilState: Get setter function (write-only)
//   // ⚡ This component WON'T re-render when counterAtom changes
//   //    because it doesn't subscribe to the value
//   const setCount = useSetRecoilState(counterAtom);
//   console.log("Increase component rendered"); // 🔍 Only logs on mount/unmount

//   // 📝 Separate function for the click handler (good practice)
//   function increase() {
//     setCount((currentCount) => currentCount + 1);
//   }

//   return (
//     <button
//       onClick={increase}
//       style={{
//         margin: "0 10px",
//         padding: "10px 20px",
//         backgroundColor: "#4CAF50",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Increase
//     </button>
//   );
// }

// // ➖ Decrease Button - Only subscribes to atom SETTER
// function Decrease() {
//   // 🎣 useSetRecoilState: Get setter function (write-only)
//   // ⚡ This component WON'T re-render when counterAtom changes
//   const setCount = useSetRecoilState(counterAtom);
//   console.log("Decrease component rendered"); // 🔍 Only logs on mount/unmount

//   // 📝 Separate function for the click handler
//   function decrease() {
//     setCount((currentCount) => currentCount - 1);
//   }

//   return (
//     <button
//       onClick={decrease}
//       style={{
//         margin: "0 10px",
//         padding: "10px 20px",
//         backgroundColor: "#f44336",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//       }}
//     >
//       Decrease
//     </button>
//   );
// }

// export default App;

// ====================================================================
// 📊 PERFORMANCE COMPARISON SUMMARY
// ====================================================================

/*
┌─────────────────┬──────────────┬─────────────────┬────────────────────┐
│    Approach     │ Prop Drilling│  Re-render Issue│    Performance     │
├─────────────────┼──────────────┼─────────────────┼────────────────────┤
│ useState        │     ❌       │       ❌        │        Poor        │
│ Context API     │     ✅       │       ❌        │      Medium        │
│ Recoil          │     ✅       │       ✅        │       Best         │
└─────────────────┴──────────────┴─────────────────┴────────────────────┘

🔍 RE-RENDER BEHAVIOR:

useState:
- Parent re-renders → ALL children re-render
- Every component logs on state change

Context API:
- Context value changes → ALL consumers re-render
- Every component that uses useContext logs on state change

Recoil:
- Atom changes → ONLY components using useRecoilValue re-render
- Components using only useSetRecoilState DON'T re-render
- Maximum efficiency!

💡 WHEN TO USE EACH:

useState: 
- Simple, local component state
- Small apps with minimal state sharing

Context API:
- Medium apps
- When you need to avoid prop drilling
- React built-in solution (no extra dependencies)

Recoil:
- Large, complex apps
- When performance is critical
- When you need fine-grained reactivity
- Advanced state management features needed
*/

/* ******************************************************************************************************************************************** */

// Memo :

// so react is not that smart to know which comp to rerender and which to not , we have to explicitely tell it. so bcz of that we have to memoize it with useing memo.

// if u pass the state/props in memo fun it will still rerender but if there are not props present in child comp the memoized fun will take care of it that is should not rerender.

// best example is that harkirat explianed in video.

// Selectors :
// an easy concept as it just an derived state from a main state/atom that we use when it needed.
// harkirat's counter eg is good to grsap this concept.

// code eg :

// Importing counterAtom and evenSelector from the store module
// import { counterAtom, evenSelector } from "./store/atomsandselectors/atomssel";

// // Main App component that serves as the entry point for the application
// function App() {
//   return (
//     <div>
//       {/* Wrapping the application in RecoilRoot to provide Recoil state management */}
//       <RecoilRoot>
//         {/* Rendering the Buttons, Counter, and IsEven components */}
//         <Counter />

//         <Buttons />
//         <IsEven />
//       </RecoilRoot>
//     </div>
//   );
// }

// // Counter component that displays the current count
// function Counter() {
//   // useRecoilValue hook to get the current value of counterAtom
//   const count = useRecoilValue(counterAtom);

//   return (
//     <div>
//       <h2>Count: {count}</h2> {/* Displaying the current count value */}
//     </div>
//   );
// }

// // Buttons component that provides controls to increase and decrease the count
// function Buttons() {
//   // useSetRecoilState hook to get the setter function for counterAtom
//   const setCount = useSetRecoilState(counterAtom);

//   // Function to increase the count by 2
//   function increase() {
//     setCount((c) => c + 2); // Updating state by adding 2 to the current count
//   }

//   // Function to decrease the count by 1
//   function decrease() {
//     setCount((c) => c - 1); // Updating state by subtracting 1 from the current count
//   }

//   return (
//     <div>
//       {/* Button to trigger the increase function when clicked */}
//       <button onClick={increase}>Increase</button>

//       {/* Button to trigger the decrease function when clicked */}
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// }

// // IsEven component that checks if the count is even and displays the result
// function IsEven() {
//   // useRecoilValue hook to get the computed value from evenSelector
//   const isEven = useRecoilValue(evenSelector);

//   return (
//     <div>
//       {/* Displaying whether the count is even or not */}
//       <h3>Is Even: {isEven ? "Yes" : "No"}</h3>
//     </div>
//   );
// }

// // Exporting the App component as the default export to make it available in other parts of the application
// export default App;


/* ****************************************************************************************************************************************** */


