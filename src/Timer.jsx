import React, { useState, useEffect, useRef } from "react";

function setDefaultValues() {
  const userCount = localStorage.getItem("count");
  return userCount ? +userCount : 0;
}

export default function Timer() {
  const [count, setCount] = useState(setDefaultValues());
  const [isCounting, setIsCounting] = useState(false);
  const timerIdRef = useRef(null);

  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
  };

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  useEffect(() => {
    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
        timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    };
  }, [isCounting]);

  // componentDidMount() {
  //     const userCount = localStorage.getItem('count');
  //     if (userCount) this.setState({ count: +userCount });
  // }

  // componentDidUpdate() {
  //     localStorage.setItem('count', this.state.count);
  // }

  // componentWillUnmount() {
  //     clearInterval(this.counterId);
  //     this.handleStop();
  // }

  return (
    <div className="timer">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
