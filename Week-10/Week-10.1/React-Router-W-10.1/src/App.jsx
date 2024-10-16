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

export default App;

 */

/* **************************************************************************************** */

// useRef

// as we knoiw there are many ways to target the dom elements and perform operations on it here we firstly used a ugly way with manipulating dom bt this is n ot a great way to do it.

// so great way to do is useRef as we use react so be modern and proffeional to handle use cases like this.

import React, { useRef } from "react";

function App() {
  // defining useRef hook here ...

  const inputRef = useRef();

  function focusOnName() {
    // targetting the current ele in dm

    inputRef.current.focus();
    alert("Please enter your name first ");

    /* document.getElementById("name").focus();
    alert("Please enter your name first "); */
  }

  return (
    <div>
      <h2> Signup Form</h2>
      {/*       <input id="name" type="text" placeholder="Enter your name" />
       */}

      <input ref={inputRef} type="text" placeholder="Enter your name" />

      <input type="password" placeholder="Enter your Password" />
      <button onClick={focusOnName}>Signup</button>
    </div>
  );
}

export default App;

