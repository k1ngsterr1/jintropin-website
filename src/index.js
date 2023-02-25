import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";
import Reviews from "./pages/Reviews";
import Verification from "./pages/Verification";

// Fonts
import "./fonts/FTY_STRATEGYCIDE_NCV.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/settings" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
