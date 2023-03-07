import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";

// Fonts
import "./fonts/FTY_STRATEGYCIDE_NCV.ttf";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "rc-dropdown/assets/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
