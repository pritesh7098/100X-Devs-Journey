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

const ExampleComponent = () => {
  const { data, loading, error } = useFetch("https://dummyjson.com/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ExampleComponent;
