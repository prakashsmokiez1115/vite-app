import React from 'react'
import { useState } from 'react';

const State = () => {

  let [count, setCount] = useState(0);

  function runStateFunction() {

    setCount(count + 90);

  }


  return (
    <div>
      <h1>Use State</h1>
      <h2>{count}</h2>
      <button onClick={runStateFunction}>Add</button>
    </div>
  )
}

export default State;