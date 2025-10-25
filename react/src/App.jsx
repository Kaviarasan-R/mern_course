import "./App.css";
import Parent from "./Parent";
import UseStateHook from "./UseStateHook";
import UseEffectHook from "./UseEffectHook";

import Posts from "./Posts";
import SimpleRef from "./SimpleRef";
import ParentRef from "./ref/ParentRef";
import ParentMemo from "./memoization/ParentMemo";
import UseReducerHook from "./UseReducerHook";
import { useEffect, useState } from "react";
import PostProvider from "./providers/postProvider";
import Users from "./User";
import UserProvider from "./providers/userProvider";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Parent name={"kavi"} surname={"arasan"} />
      <UseStateHook />
      <br />
      <br />
      <div>
        <button onClick={() => setShow(!show)}>Toggle UseEffectHook</button>
        {show ? <UseEffectHook value={1} /> : <></>}
      </div>
      <PostProvider>
        <>
          <Posts id={1} />
          <UserProvider>
            <>
              <Users id={1} />
              <Posts id={1} />
            </>
          </UserProvider>
        </>
      </PostProvider>

      {/* <Posts id={3} /> */}
      <SimpleRef />
      <ParentRef />
      <ParentMemo />
      <UseReducerHook />
    </div>
  );
}

export default App;
