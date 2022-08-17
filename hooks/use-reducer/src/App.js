import React, { useReducer } from "react";

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <span>{count}</span>
      <button onClick={dispatch({type: 'increment'})}>+</button>
      <button onClick={dispatch({type: 'decrement'})}>-</button>
      <button onClick={dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
}

export default App;
