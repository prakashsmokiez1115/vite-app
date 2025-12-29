import React from 'react'
import { useState } from 'react';

const State = () => {

  let [count, setCount] = useState(0);

  // const is a JavaScript keyword,
  // count holds the current state value,
  // setCount is the state updater function,
  // and useState is a React Hook function.


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