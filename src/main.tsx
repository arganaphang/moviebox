import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";

// biome-ignore lint/style/noNonNullAssertion: must be there dude
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
