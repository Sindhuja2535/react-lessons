// components/App9.jsx
import React, { useState } from "react";

function App9() {
  const [count, setCount] = useState(10); // ✅ Start from 10

  return (
    <div>
      <h1>App9</h1>
      <h2>Assignment</h2>
      <p>
      <button onClick={() => setCount(count + 1)}>+</button>
        {count}
      <button onClick={() => setCount(count - 1)}>-</button>
   </p>
    </div>
  );
}

export default App9;
