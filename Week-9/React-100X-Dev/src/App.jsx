// Simple counter code

/* import React, { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
 */

// notifications count code for understanding re-renders

/* import { useState } from "react";

export default function App() {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
    </div>
  );
}

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }
  console.log("re-render completed");

  return (
    <div>
      <button onClick={increment}>Increase count</button>
      {notificationCount}
    </div>
  );
}; */

// use effect

/* import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount((count) => count + 1);
  }

  // when we doesent pass an dependencies array, then it will only run when component is mounted and atleast once.

     useEffect(function () {
    setInterval(inc, 1000);
  }, []); 

  // and when we pass dependency array to it then it runs when component is mounted and when the state changes. for eg: increasing count when state changes, multiple api calls after changing particular state.

  useEffect(
    function () {
      console.log("the count is " + count);
    },
    [count]
  );

  return (
    <div>
      {count}
      {<button onClick={inc}>increment</button>}{" "}
    </div>
  );
}

export default App;
 */

// linkedin feed example for understanding useeffects

/* import React, { useEffect, useState } from "react";

function App() {
  const [currentTab, setcurrentTab] = useState("Feed");

  useEffect(
    () => console.log("clicked on a tab called " + currentTab),
    [currentTab]
  );

  function FeedFun() {
    setcurrentTab("Feed");
  }

  return (
    <div>
        this feed button is only for understanding purpose like how we define a
      function externally for clean code and we can also define it in an inline
      also. }
      <button
        onClick={FeedFun}
        style={{ color: currentTab == "Feed" ? "red" : "black" }}
      >
        Feed
      </button>
             // inline implemetations
       }{" "}
      <button
        onClick={() => setcurrentTab("Connection")}
        style={{ color: currentTab == "Connection" ? "red" : "black" }}
      >
        Connection{" "}
      </button>
      <button
        onClick={() => setcurrentTab("notifications")}
        style={{ color: currentTab == "notifications" ? "red" : "black" }}
      >
        notifications
      </button>
      <button
        onClick={() => setcurrentTab("DM")}
        style={{ color: currentTab == "DM" ? "red" : "black" }}
      >
        DM
      </button>
    </div>
  );
}

export default App;
 */

// cleanup logic with clear interval

/* import React, { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

const Timer = () => {
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval

    return () => clearInterval(intervalId);
  }, []);

  console.log("clear interval");

  return <div>{seconds}</div>;
};

export default App;
 */
