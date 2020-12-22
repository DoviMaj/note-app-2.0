import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.css";
import App from "./App";
import sample from "./sample";

ReactDOM.render(
  <React.StrictMode>
    <App sample={sample} />
  </React.StrictMode>,
  document.getElementById("root")
);
