import React, { useState, useRef, useEffect } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef();
  return (
    <>
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

export default App;
