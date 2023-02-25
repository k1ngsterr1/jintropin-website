import React from "react";
import { Routes, Route } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";
import Reviews from "./pages/Reviews";
import Verification from "./pages/Verification";

// Styles
import styles from "./styles/main-screen-styles/main_screen.css";
import AboutJinScreen from "./screens/AboutJinScreen";
import UsefulScreen from "./screens/UsefulScreen";
import ContactScreen from "./screens/ContactScreen";

const App = () => {
  return (
    <div className="app">
      <MainScreen />
      <AboutJinScreen />
      <UsefulScreen />
      <ContactScreen />
    </div>
  );
};

export default App;
