import React from "react";
import ReactDOM from "react-dom/client";
import { Suspense } from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";

// Fonts
import "./fonts/FTY_STRATEGYCIDE_NCV.ttf";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "rc-dropdown/assets/index.css";

// Styles
import "./styles/navigation-styles/navigation_styles.css";

// Languages
import "./i18n";
import MoreInfo from "./pages/MoreInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/information" element={<MoreInfo />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
