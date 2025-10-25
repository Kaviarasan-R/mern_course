import React from "react";

function ChildMemo({ onClick }) {
  console.log("Child re-rendered");

  return <button onClick={onClick}>Click Me</button>;
}

export default React.memo(ChildMemo); // Memoized, so it only re-renders when props change
