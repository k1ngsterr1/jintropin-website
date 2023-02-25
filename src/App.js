import React from "react";
import { Routes, Route } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";
import Reviews from "./pages/Reviews";
import Verification from "./pages/Verification";

// Styles
import styles from "./styles/main-screen-styles/main_screen.css";
import AboutJinScreen from "./screens/AboutJinScreen";

const App = () => {
  return (
    <div className="app">
      <MainScreen />
      <AboutJinScreen />
    </div>
  );
};

export default App;
