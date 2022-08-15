import React, { useState, useRef, useEffect } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(0)
  useEffect(() => {
    renderCount.current++;
  });
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <h1>I rendered {renderCount.current}</h1>
    </>
  );
}

export default App;
