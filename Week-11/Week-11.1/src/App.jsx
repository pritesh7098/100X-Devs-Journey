import React, { useEffect, useState } from "react";

// import { useFetch } from "./hooks/useFetch";

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

/* const ExampleComponent = () => {
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

export default ExampleComponent; */

/* ***************************************************************************************************************************************** */

// Week : 11.1 : Custom Hooks Revised ( June 2025 )

// Approach 1 : counter app without custom hooks.
/* 
const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Counter App </h1>
      {count} <br />
      <button onClick={increment}>Increase Count</button>
    </div>
  );
}; 
export default App; */

// Approach 2 : counter app with custom hooks.

/* import { useCounter } from "./hooks/useCounter";

const App = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <h1>Counter App </h1>
      {count} <br />
      <button onClick={increment}>Increase Count</button>
    </div>
  );
};

export default App;



 */

/* ///////////// */

// useFetch hook :
// Normal Approach

/* 
const App = () => {
  const [posts, setPosts] = useState({});

  async function fetchPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = await res.json();
    setPosts(jsonData);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>useFetch Hook</h1>
      <div>
        <li>{posts.title}</li>
        <li>{posts.userId}</li>
        <li>{posts.id}</li>
      </div>
    </div>
  );
};

export default App;
 */

// useFetch custom hook approach "
/* 
import { useFetch } from "./hooks/useFetch";

const App = () => {
  const { posts } = useFetch();

  return (
    <div>
      <h1>useFetch Hook</h1>
      <div>
        <li>{posts.title}</li>
        <li>{posts.userId}</li>
        <li>{posts.id}</li>
      </div>
    </div>
  );
};

export default App; */

// Attention : here i use useFetch name as for understanding only it can be any like useFetchTodos likewise also there may be chance ki  a hook called useFetch by default present in ReactJS so dont confuse urself in it.
// also we can play with it as well as it covers before 2025.

// cont from sargam explaining usePrev hook ( 1.15 ) - sat/sun
