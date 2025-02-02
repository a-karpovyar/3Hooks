import React, { useState } from "react";
import Timer from "./Timer";
// import Clicker from "./Clicker";
// import WithRef from "./Ref";

function App() {
  const [isTimer, setTimer] = useState(false);

  return (
    <div className="App">
      <h2>React App</h2>
      {/* <button onClick={() => setCLicker(!isClicker)}>Toogle Clicker</button>
      {isClicker && <Clicker/>} */}
      <button onClick={() => setTimer(!isTimer)}>Toogle tismer</button>
      {isTimer && <Timer/>}
    </div>
  );
}

export default App;
