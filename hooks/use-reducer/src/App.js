import React, { useState, useReducer } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  // function changeCount(amount) {
  //   setCount(prevCount => prevCount + amount)
  // }

  function resetCount() {
    setCount(0);
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  );
}

export default App;
