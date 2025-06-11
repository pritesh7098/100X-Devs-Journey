// Week 9.4 : React from basics Offline lecture - 2.

// Children props
/* 
import React from "react";

const Card = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "20px",
        margin: "10px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </Card>
      <Card>
        <h2>Another Card</h2>
        <p>This card has different content!</p>
      </Card>
    </div>
  );
};

export default App; */

/* ****************************************************************************************** */

// List and keys
// understtod the concept, just implement it via code.

// Class based vs functional components

/* import React, { Component } from "react";

class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <ClassCounter />
    </div>
  );
};

export default App; */

// vs

/* import React, { useState } from "react";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={incrementCount}>Click me to increment </button>
    </div>
  );
};

export default FunctionalComponent;
 */

/* ****************************************************************** */

// Lifecycle events

// part of class based components also i have undestood it in fb componenents as well.

// Error Boundry

// Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.

// Error boundaries only exist in class based components. ( u most see this in React native )

// Import the ErrorBoundary component for error handling in the App component.
import ErrorBoundary from "./ErrorBoundary";

// Create a function component named App that will be rendered in the root element
const App = () => {
  // Return the JSX that will be rendered in the browser
  return (
    // Create a div element with JSX
    <div>
      {/* Wrap Card1 in ErrorBoundary to catch any potential rendering errors. */}
      <ErrorBoundary>
        <Card1 /> {/* Renders Card1 component. */}
      </ErrorBoundary>
      {/* Similarly, wrap Card2 to ensure any errors are caught. */}
      <ErrorBoundary>
        <Card2 /> {/* Renders Card2 component. */}
      </ErrorBoundary>
      {/* Card3 is not wrapped in ErrorBoundary, so errors will not be caught by the boundary. */}
      <Card3 /> {/* Renders Card3 component. */}
    </div>
  );
};

// Create a function component named Card1 that will be rendered in the App component
function Card1() {
  // Throw an error to simulate a rendering error in the component.
  throw new Error("Error While Rendering Card 1");

  // Return the JSX that will be rendered in the browser
  return (
    // Renders the content of Card1 (though this code is unreachable due to the thrown error).
    <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
      <h2>Card 1</h2>
    </div>
  );
}

// Create a function component named Card2 that will be rendered in the App component
function Card2() {
  // Return the JSX that will be rendered in the browser
  return (
    // Renders the content of Card2 with styling and padding, no errors thrown here.
    <div
      style={{
        background: "red",
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
      }}
    >
      <h2>Card 2</h2>
    </div>
  );
}

// Create a function component named Card3 that will be rendered in the App component
function Card3() {
  // Return the JSX that will be rendered in the browser
  return (
    // Renders the content of Card3 with styling similar to Card2.
    <div
      style={{
        background: "red",
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
      }}
    >
      <h2>Card 3</h2>
    </div>
  );
}

// Exporting the main App component for use in the application.
export default App;

// as error boundary is not a concept in a functional comp in react right now as there are very low chances of getting an error in web based app.
// it is mostly used in cb comp and react native env as their are high chances of getting an error in it.

/* *-*************************************************************************************************** */

// Fragments

// React expects to have all your child comp in a parent div only.
// either you can use fragments or you can use one div

/* *-*************************************************************************************************** */
