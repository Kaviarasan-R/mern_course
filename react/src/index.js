import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LifecycleApp } from "./LifecycleDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <LifecycleApp />
    <App />
  </>
  // </React.StrictMode>
);
