import React, { useReducer } from "react";

function reducer(state, action) {
  console.log(action.stepper);

  switch (action.type) {
    case "increment": // { state: {count: 0, step: 5}, count: 1 }  -> count: 0, step: 5, count: 1 -> { count: 0, step: 5, count: 1 }
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

// Complex Objects
function UseReducerHook() {
  // [variable, function]
  const [state, dispatch] = useReducer(reducer, { count: 0, step: 5 });

  return (
    <div>
      <h1>Reducer Hook</h1>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "increment", stepper: "increment" })}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement", stepper: "decrement" })}
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", stepper: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default UseReducerHook;
