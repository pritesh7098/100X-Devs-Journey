// this is a custom hook approach

/*import { React, useState, useEffect } from "react";
export function useFetchTodo() {
  const [post, setPosts] = useState(null);
  async function fetchData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return post;
}
 */

// useFetch hook

import { React, useState, useEffect } from "react";
export default function useFetch(url) {
  const [post, setPosts] = useState();
  async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    post,
  };
}
