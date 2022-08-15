import React, { useState } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <h1>My name is {name}</h1>
    </>
  );
}

export default App;
