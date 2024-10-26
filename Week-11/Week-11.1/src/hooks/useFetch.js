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

// useFetch.js
import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
