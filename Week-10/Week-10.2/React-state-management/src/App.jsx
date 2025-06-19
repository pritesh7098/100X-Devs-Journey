// Week : 10.2 : React Part 3 : State Management Stuff : Context API, Rolling up the state etc ... ( June 2025 )

/* import { useState } from "react";

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "2px" }}>
      <h1>State management in react </h1>
      <div>
        <LightBulb />
      </div>
    </div>
  );
}

const LightBulb = () => {
  const [bulbon, setBulbOn] = useState(true); // rolled up the state here as it getting used in both components below.

  return (
    <>
      <BulbState bulbon={bulbon} />
      <ToggleBulbState bulbon={bulbon} setBulbOn={setBulbOn} />
    </>
  );
};

const BulbState = ({ bulbon }) => {
  return <div>{bulbon ? "Bulb is On Now 💡" : " Bulb is Off Now ⚫"}</div>;
};

// toggle to switch mode like on or off.
const ToggleBulbState = ({ bulbon, setBulbOn }) => {
  const toggleButton = () => {
    setBulbOn((curestate) => !curestate);
    /*     setBulbOn(!bulbon);
     
  };

  return <button onClick={toggleButton}> Togggle The Bulb </button>;
};

export default App; */

/* ******************************************************************************************************************** */

// using styles and comments to revise it again.

/*import { useState } from "react";

// Main App component
function App() {
  return (
    <div style={styles.appContainer}>
      <h1 style={styles.header}>State Management in React</h1>
      <div>
        <LightBulb />
      </div>
    </div>
  );
}

// LightBulb component manages the state of the bulb
const LightBulb = () => {
  // useState hook to manage the bulb's on/off state
  const [bulbon, setBulbOn] = useState(true);

  return (
    <>
      {/* Display the current state of the bulb 
      <BulbState bulbon={bulbon} />
      {/* Button to toggle the bulb's state 
      <ToggleBulbState bulbon={bulbon} setBulbOn={setBulbOn} />
    </>
  );
};

// Component to display the current state of the bulb
const BulbState = ({ bulbon }) => {
  return (
    <div style={styles.bulbState}>
      {bulbon ? "Bulb is On Now 💡" : "Bulb is Off Now ⚫"}
    </div>
  );
};

// Component with a button to toggle the bulb's state
const ToggleBulbState = ({ bulbon, setBulbOn }) => {
  // Function to toggle the bulb's state
  const toggleButton = () => {
    setBulbOn((currentState) => !currentState);
  };

  return (
    <button style={styles.toggleButton} onClick={toggleButton}>
      Toggle The Bulb
    </button>
  );
};

// Internal CSS styles
 const styles = {
  appContainer: {
    backgroundColor: "black",
    color: "white",
    padding: "20px",
    textAlign: "center",
    borderRadius: "8px",
    width: "300px",
    margin: "50px auto",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  bulbState: {
    fontSize: "18px",
    margin: "10px 0",
  },
  toggleButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
}; 

export default App;*/

/* ******************************************************************************************************************** */

// Props and props Drilling in React :

// i have understood already that what is prop and what is prop drilling and to avoid it next we are gonna use context api.

/* ********************************************************************************************************************* */

// Context API :
// Ugly code as it has prop drilling.

/*   import React, { useEffect, useState } from "react";

// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

function Parent() {
  const [count, setCount] = useState(0);

  function Value({ count }) {
    return <p>Count: {count}</p>;
  }
  function Incrase({ count, setCount }) {
    return <button onClick={() => setCount(count + 1)}>Increase</button>;
  }

  function Decrease({ count, setCount }) {
    return <button onClick={() => setCount(count - 1)}>Decrease</button>;
  }

  return (
    <>
      <Value count={count} setCount={setCount} />

      <Incrase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </>
  );
} 

export default App;  */

// Better way to do is use Context API :
/* 
import { useContext } from "react";
import { CountContextProvider, CountContext } from "./MyContext";

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

function Parent() {
  return (
    <CountContextProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Counter App</h1>
        <Value />
        <div style={{ marginTop: "10px" }}>
          <Increase />
          <Decrease />
        </div>
      </div>
    </CountContextProvider>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return <p style={{ fontSize: "24px", margin: "20px 0" }}>Count: {count}</p>;
}

function Increase() {
  const { count, setCount } = useContext(CountContext);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        margin: "0 10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Increase
    </button>
  );
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return (
    <button
      onClick={() => setCount(count - 1)}
      style={{
        margin: "0 10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Decrease
    </button>
  );
}

export default App;
 */

// at a time of revising , get one more contextAPI example and do it practically.

// ......................................................................

// But when you want to use your own providers rather than whuich reacts provide you , you just have to wrap all logic under wrapper function, import it and use it.

/* import { useContext } from "react";
import { CountContext, WrapperContext } from "./components/WrapperContext";

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

function Parent() {
  return (
    <WrapperContext>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Counter App</h1>
        <Value />
        <div style={{ marginTop: "10px" }}>
          <Increase />
          <Decrease />
        </div>
      </div>
    </WrapperContext>
  );
}

function Value() {
  const { count } = useContext(CountContext);
  return <p style={{ fontSize: "24px", margin: "20px 0" }}>Count: {count}</p>;
}

function Increase() {
  const { count, setCount } = useContext(CountContext);
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{
        margin: "0 10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Increase
    </button>
  );
}

function Decrease() {
  const { count, setCount } = useContext(CountContext);
  return (
    <button
      onClick={() => setCount(count - 1)}
      style={{
        margin: "0 10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Decrease
    </button>
  );
}

export default App;
 */

/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

// INTRODUCING RECOIL

/* import React, { createContext, useContext, useState } from "react";
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";

const count = atom({
  key: "countState", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
  );
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return (
    <button onClick={() => setCount((count) => count + 1)}>Increase</button>
  );
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

export default App; */

/* ******************************************************************************************************************************** */
