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

import { useState } from "react";

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
      {/* Display the current state of the bulb */}
      <BulbState bulbon={bulbon} />
      {/* Button to toggle the bulb's state */}
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

export default App;

/* ******************************************************************************************************************** */

