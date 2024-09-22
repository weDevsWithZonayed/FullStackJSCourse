import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times!!!</p>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
