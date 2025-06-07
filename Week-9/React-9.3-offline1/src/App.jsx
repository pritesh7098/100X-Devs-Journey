// Simple counter code

/*  import React, { useState } from "react";

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
};  */

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

/* *********************************************************************************************************************************** */

// React 9.3 Offline class 1 : Revised June 2025.

/* import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <h1>Hi There </h1>
      <ToggleMessage />
      <ToggleMessage />

      <ToggleMessage />
    </div>
  );
};

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false); // by default it sets to true .

  console.log("Rerender");

  function toggle() {
    setIsVisible(!isVisible); // sets and opposite if its visible make it invisible and vice versa.
  }

  return (
    <>
      <div>
        <button onClick={toggle}> Toggle </button> // calls toggle function 
        {isVisible && <p>This message is conditionally rendered</p>}
                     // this getting rendered on a screen. 
         
      </div>
    </>
  );
};

export default App;   */

/* ********************************************************************************************************************************** */

// Linkedin post component rendering : when i click on add post the posts are getting added.

/* import { useState } from "react";
import { PostComponent } from "./Post";
import { React } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.title}
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "harkirat",
        subtitle: "10000 followers",
        time: "2m ago",
        image:
          "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:
          "What to know how to win big? Check out how these folks won $6000 in bounties.",
      },
    ]);
  }

  return (
    <div style={{ background: "black", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
}

export default App;
 */

/***************************************************************************************************************************/

// useEffect hook.

/* import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount((currValue) => currValue + 1); /* simple way with arrow fun. 
  }

  useEffect(function () {
    setInterval(increaseCount, 1000);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default App; */

// with dependency array

/* import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function inc() {
    setCount((count) => count + 1);
  }

  // when we doesent pass an dependencies array, then it will only run when component is mounted and atleast once.
/* 
     useEffect(function () {
    setInterval(inc, 1000);
  }, []); */

// and when we pass dependency array to it then it runs when component is mounted and when the state changes. for eg: increasing count when state changes, multiple api calls after changing particular state.

/* useEffect(

    function () {
      console.log("the count is " + count);
    },
    [count]
  );
 
  return (
    <div>
      {<button onClick={inc}>increment</button>} {count}
    </div>
  );
}

export default App; */

/* ********************************************************************************************************* */

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
      <button
        onClick={FeedFun}
        style={{ color: currentTab == "Feed" ? "red" : "black" }}
      >
        Feed
      </button>
     
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

export default App; */

//this feed button is only for understanding purpose like how we define a function externally for clean code and we can also define it in an inline also.

//In above eg i understood that how the current state is set and how we can change over a time based on use action like it should be in dependency array so when action intiates it gets change with it.

/* ********************************************************************************************************* */

// cleanup logic.

// as above.
