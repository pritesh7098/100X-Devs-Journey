import React, { useEffect, useRef, useState } from "react";

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

// usePrev hook : this hook is nothing but under the hood it uses useRef only and it basically stores the previous value ( atleast for now this understanding is enough). also very rarely you use this if any use case is there.

/* import { usePrev } from "./hooks/usePrev";
const App = () => {
  const [couunt, setCount] = useState(0);
  const prev = usePrev();

  const increment = () => {
    setCount(couunt + 1);
  };

  return (
    <div>
      <h1>Use PrevHook </h1>
      <p>Cureent count is : {couunt}</p>
      <button onClick={increment}>Increment</button>

      <p>The Previous Value Is : {prev} </p>
    </div>
  );
};

export default App; */

// problem is this implementation is very ad-hoc so read through the article.

/* ******************************************************************************************************** */

// useDebounce hook
// whatever i have understand till now is debounce is a concept which basically handles current operations and then pass it to the main thing like he debounces the operation to another function when he is done.
// Amazon search can be the good example for it.
// As when we are typing it doesent send ackend req instantly , instead of it it waits and after submision it send the actual req to the main function. then the main function is executed.

/* function useDebounce(originalFn) {
  const curClock = useRef();

  const fn = () => {
    clearTimeout(curClock.current);
    curClock.current = setTimeout(originalFn, 200);
  };

  return fn;
}

const App = () => {
  const expensiveoperation = () => {
    fetch("https://amazon.in");
  };

  const debounceFn = useDebounce(expensiveoperation); // useDebounce hook that we have implemented abpve

  return (
    <div>
      <h1>useDebounce Hook </h1>
      <input type="text" onChange={debounceFn}></input>
    </div>
  );
};

export default App; */

// Another approach :
// Import the useDebounce custom hook from the hooks folder
/* import useDebounce from "./hooks/useDebounce";

// Create a function component named App that serves as the main application component
export default function App() {
  // Create a state variable named inputValue and a function named setInputValue that updates the state variable when called
  const [inputValue, setInputValue] = useState("");

  // call the useDebounce custom hook with the inputValue state variable and a delay of 200 milliseconds
  const useDebouncedValue = useDebounce(inputValue, 200);

  // Create a function named change that takes an event object as an argument and updates the inputValue state variable with the value of the input element
  function change(e) {
    // Update the inputValue state variable with the value of the input element
    setInputValue(e.target.value);
  }

  // Create a side effect that logs the string "Exensive Oprations" to the console when the useDebouncedValue state variable changes
  useEffect(() => {
    // expensive operation
    // fetch
    console.log("Exensive Oprations");
  }, [useDebouncedValue]);

  // Return the JSX for the component
  return (
    <div>
      {/* Create an input element with a type of text and an onChange event handler that calls the debounceFn function }
      <input type="text" onChange={change} />
    </div>
  );
}
 */

//Final verdict : i have understood the useCase of this hook but real world example is a great way to understood it more deeply.

/* ***************************************************** Class Ends Here ******************************************************** */
