import React from "react";
import { useFetch } from "./hooks/useFetch";

// custom hooks for incrementing counter
/* function useCounterInc() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  // we have to return this as it is dependent on the things.

  return {
    count: count,
    incrementCounter: incrementCounter,
  };
}
 */

// before custom hooks

/* function App() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
} */

// after custom hooks

/* function App() {
  const { count, incrementCounter } = useCounterInc(); // calling custom hook

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
 */

// calling an api endpoint directly or with custom hook for cleaner code.

/* function App() {
  const post = useFetchTodo();

  return <div>{post}</div>;
}

export default App; */

/* ********************************************************************************************************************************************* */

// some important hooks in react

// useFetch hook

function App() {
  const { post } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return <div>{post}</div>;
}

export default App;
