/* import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <MainRoutes />
      </div>
    </BrowserRouter>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="navigation ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

// Main Routes Component
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

// components to show after calling it.

// Home Component
function Home() {
  return (
    <div className="page">
      <h3>Home Page</h3>
    </div>
  );
}

// Services Component
function Services() {
  return (
    <div className="page">
      <h3>Services Page</h3>
    </div>
  );
}

// Signup Component
function Signup() {
  return (
    <div className="page">
      <h3>Signup Page</h3>
    </div>
  );
}

export default App; */

/* **************************************************************************************** */

// useRef : UseRef Hook in React.

// as we know there are many ways to target the dom elements and perform operations on it here we firstly used a ugly way with manipulating dom bt this is not a great way to do it.

// so great way to do is useRef as we use react so be modern and proffeional to handle use cases like this.

/* import React, { useRef } from "react";

function App() {
  // defining useRef hook here ...

  const inputRef = useRef();

  function focusOnName() {
    // targetting the current ele in dm

    inputRef.current.focus();
    alert("Please enter your name first ");

    /* document.getElementById("name").focus();
    alert("Please enter your name first "); 
  }

  return (
    <div>
      <h2> Signup Form</h2>
      {/*       <input id="name" type="text" placeholder="Enter your name" />
       }

      <input ref={inputRef} type="text" placeholder="Enter your name" />

      <input type="password" placeholder="Enter your Password" />
      <button onClick={focusOnName}>Signup</button>
    </div>
  );
}

export default App; */

// Second use case
// UseRef - also it is a good raw middlware between the two like raw variable and the usestate.

/* import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);

  function start() {
    let final = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(final);
  }

  return (
    <div>
      {timer}
      <button onClick={start}>Start Clock</button>
      <button onClick={stop}>Stop Clock</button>
    </div>
  );
}

export default App; */

/* ************************************************************************************************************************************* */

// Week 10.1 : SPA's , React Router ETC. ( Revised June 2025 )

/* import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Class11 } from "./pages/Class11";
import { Class12 } from "./pages/Class12";
import { NoPageFound } from "./pages/NoPageFound";
import Layout from "./pages/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          // This layout component has evrything like header , mid section where
          all the section will rendered and footer.
          <Route path="/" element={<Layout />}>
            // Defining route names with the component it needs to render after
            clicking on this route.
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11 />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12 />}
            />
            <Route path="*" element={<NoPageFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App; */

/*****************************************************************************************************************************************/

// Layout's ( Jargon in NextJs)
// cleared with the above example.

/*****************************************************************************************************************************************/

// Allen website : Assignment.

/*****************************************************************************************************************************************/

// useRef :

// 1) Focusing on any input element  after clicking btn.

/* import React, { useRef } from "react";

const App = () => {
  //    const focus = () => {
  //   // naive approach - not so good so use useRef
  //   document.getElementById("one").focus();
  // };

  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      {" "}
      <div style={{ backgroundColor: "pink", height: "100vh" }}>
        <h1>Understanding useRef Hook</h1>
        <div
          style={{
            display: "flex",
            padding: "20px",
            margin: "20px",
            gap: 10,
            backgroundColor: "skyblue",
          }}
        >
          <h3>Name </h3>
          <input ref={inputRef} type="text" id="one" placeholder="Name" />

          <h3>Password </h3>

          <input type="text" id="two" placeholder="Password" />
          <button onClick={focus}>ClickMe</button>
        </div>
      </div>
    </>
  );
};

export default App; */

// 2) Clock with start and stop functionality

/* import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  //let liveTimer = 0; // bad approach decl raw var.
  const [timer, setTimer] = useState(0); // good approach for now atleast

  const startcount = () => {
    let liveTimer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    setTimer(liveTimer);
  };

  const stopCount = () => {
    clearInterval(timer);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>current Count : {count}</h2>
      <button onClick={startcount}>Start Timer</button>
      <button onClick={stopCount}>Stop Timer</button>
    </div>
  );
};

export default App; */

// Remember the lesser the rerendering is the app is that optimal.
// so in that case now we have to use useRef.

/* import React, { useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const timer = useRef(); // use Ref hook to avoid unnecessary rerenders.

  const startcount = () => {
    let liveTimer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    timer.current = liveTimer;
  };

  const stopCount = () => {
    clearInterval(timer.current);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>current Count : {count}</h2>
      <button onClick={startcount}>Start Timer</button>
      <button onClick={stopCount}>Stop Timer</button>
    </div>
  );
};

export default App; */

/*****************************************************************************************************************************************/
