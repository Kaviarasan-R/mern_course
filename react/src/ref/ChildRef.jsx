import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from "react";

function ChildRef(_, ref) {
  const inputRef = useRef(null);
  const userRef = useRef(null); // store fetched user data here (won’t trigger re-render)

  // null -> {data: ....}

  const [value, setValue] = useState("");

  // console.log(value);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current.focus();
    },
    clearInput() {
      inputRef.current.value = "";
    },
    async loadUser() {
      try {
        const res = await fetch("https://dummyjson.com/users/1");
        const data = await res.json();
        userRef.current = data;
        console.log("Fetched user (stored in ref):", userRef.current);
        alert(`User fetched: ${data.firstName} ${data.lastName}`);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    },
    getInputValue() {
      return inputRef.current.value;
    },
  })); // use deps: [], [state, prop]

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        placeholder="Type something..."
      />
    </div>
  );
}

export default forwardRef(ChildRef);
