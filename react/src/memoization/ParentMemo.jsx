import React, { useState, useCallback } from "react";
import ChildMemo from "./ChildMemo";

function ParentMemo() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  // Without useCallback, this function would be recreated on every render
  const handleClick = useCallback(() => {
    alert("Button clicked!");
  }, [other]);
  // If no dependencies or [], then this function wont get updated whenever parent component re-rendered.
  // Only this function updated if page refresh.

  // CASE 1: No state change should trigger re-render for child.
  // CASE 2: Any one state should trigger re-render for child.
  return (
    <div>
      <h1>Memo Hook</h1>
      <p>Count: {count}</p>
      <p>Other: {other}</p>

      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <button onClick={() => setOther((o) => o + 1)}>Increment Other</button>

      <div style={{ marginTop: 10 }}>
        <ChildMemo onClick={handleClick} />
      </div>
    </div>
  );
}

export default ParentMemo;
