import React, { useState } from "react";

function App() {
  <h1>Counter app </h1>;
}
function counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
}
return (
  <>
    <div>
      {" "}
      <button onClick={handleIncrement}> Increment </button>
    </div>
  </>
);

export default App;
