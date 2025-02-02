import React, { useState, useEffect } from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Hello from Clicker", count);
    return () => console.log('Goodbue');
  }, [count]);

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <span style={{ display: "inline-block", margin: "0 0.5rem" }}>
        {count}
      </span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Clicker;
