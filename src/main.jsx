import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Context from "./Context";

//API key : 389409335b6557a9175451578533b22b
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
