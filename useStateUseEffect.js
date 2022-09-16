
import React, { useEffect, useState } from "react";
//import "./App.css";

function DemoFetchZ() {
  let data = { title: "Waiting for Data" };
  const [todo, setTodo] = useState(data);
  const [isData, setData] = useState(false);
  const [isFetching, setFetching] = useState(false);

  useEffect(() => { // called after the first render
    async function fetchData() {
      setFetching(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      console.log("response = ", response);
      let data = await response.json();
      setTodo(data); //updt state
        setFetching(false);
        setData(true)
      console.log("Data = ", data);
    }
    fetchData();
  }, []); //[isData] null value will execute once only?

  if (isFetching) {
      console.log("data loading ......")
      alert ("data loading")
      return (<div>...Data Loading.....</div>);
  }

  return (
    <div>
           - Fetch
          <br /> {alert("..DONE...")}
      <span>Title: {todo.title}</span>
    </div>
  );
}

export default DemoFetchZ;