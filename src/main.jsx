import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppTheme } from "./theme/AppTheme";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppTheme>
        <App />
      </AppTheme>
    </BrowserRouter>
  </React.StrictMode>
);
