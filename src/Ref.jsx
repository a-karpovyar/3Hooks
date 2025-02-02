import React, { useRef, useEffect } from "react";

const WithRef = () => {
  // const inputEl = useRef(null);
  // console.log(inputEl);
  const numRef = useRef(0);

  const handleClick = () => {
    numRef.current = 1;
  };

  useEffect(() => {
    // console.log("mount", inputEl);
    console.log(numRef.current);
  }, []);
  return (
    <div>
      {/* <input placeholder="name" ref={inputEl} /> */}
      <button onClick={handleClick}>{numRef.current}</button>
    </div>
  );
};

export default WithRef;
