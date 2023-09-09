import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  Hash,
  RotateCcw,
} from "react-feather";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <div className="value">
        <p>Current value:</p>
        <h1>{count}</h1>
      </div>
      <div className="btns">
        <button title="increase current value by 1" onClick={() => setCount((count) => count + 1)}>
          <ChevronUp />
        </button>
        <button title="increase current value by 10" onClick={() => setCount((count) => count + 10)}>
          <ChevronsUp />
        </button>
        <button title="reset" onClick={() => setCount((count) => count - count)}>
          <RotateCcw />
        </button>
        <button title="random value: 1 - 100"
          onClick={() => setCount(() => Math.floor(Math.random() * 100) + 1)}
        >
          <Hash />
        </button>
        <button title="decrease current value by 10" onClick={() => setCount((count) => count - 10)}>
          <ChevronsDown />
        </button>
        <button title="decrease current value by 1" onClick={() => setCount((count) => count - 1)}>
          <ChevronDown />
        </button>
      </div>
    </main>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
