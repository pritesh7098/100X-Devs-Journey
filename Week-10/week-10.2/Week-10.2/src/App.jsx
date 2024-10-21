// counter program for understanding roll statup and unneccessary rerenders.

/* import React, { useState } from "react";

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

  return (
    <>
      <Value count={count} />

      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </>
  );
}

function Value({ count }) {
  return <p>Count:{count} </p>;
}

function Decrease({ count, setCount }) {
  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}

function Incrase({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}

export default App; */

// props drilling

/* import React, { useState } from "react";

// App Component
const App = () => {
  const [isLightOn, setIsLightOn] = useState(true);

  const toggleLight = () => {
    setIsLightOn((onAsel) => !onAsel);
  };

  // LightBulb Component
  const LightBulb = ({ isOn }) => {
    return <div>The light is {isOn ? "ON" : "OFF"}</div>;
  };

  // LightSwitch Component
  const LightSwitch = ({ toggleLight }) => {
    return <button onClick={toggleLight}>Toggle Light</button>;
  };

  return (
    <div>
      <LightBulb isOn={isLightOn} />
      <LightSwitch toggleLight={toggleLight} />
    </div>
  );
};

export default App;
 */