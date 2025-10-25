import React, { useState } from "react";
import UseEffectHook from "./UseEffectHook";

function UseStateHook() {
  let a = 0;

  // [variable, function]
  const [counter, setCounter] = useState(a); // 0

  function incrementA() {
    a = a + 1;
  }

  function incrementCounter() {
    // counter = counter + 1

    setCounter(counter + 1);
    // setCounter(() => counter + 1)
    // setCounter(() => {
    //   return counter + 1;
    // });
    // setCounter((previous) => previous + 1)
  }

  console.log("a", a);
  console.log("counter", counter);

  return (
    <>
      <h1>State Hook</h1>

      <p>a: {a}</p>
      <p>counter: {counter}</p>

      <button onClick={() => incrementA()}>a+</button>
      <button onClick={() => incrementCounter()}>counter+</button>

      {/* <UseEffectHook value={counter} /> */}
    </>
  );
}

export default UseStateHook;
