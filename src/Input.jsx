import { useState } from "react";

const Input = () => {
  const [data, setData] = useState("");

  return (
    <div>
      <h1>Input</h1>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <p>{data}</p>
    </div>
  );
};

export default Input;
