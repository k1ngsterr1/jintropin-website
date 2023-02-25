import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";
import Reviews from "./pages/Reviews";
import Verification from "./pages/Verification";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/about" element={<Reviews />} />
        <Route path="/settings" element={<Verification />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
