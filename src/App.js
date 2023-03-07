import React from "react";
import { Routes, Route } from "react-router-dom";

// Screens
import MainScreen from "./screens/MainScreen";

// Styles
import styles from "./styles/main-screen-styles/main_screen.css";
import AboutJinScreen from "./screens/AboutJinScreen";
import UsefulScreen from "./screens/UsefulScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer_Com from "./components/Footer_Com";

const App = () => {
  return (
    <div className="app">
      <MainScreen />
      <AboutJinScreen />
      <UsefulScreen />
      <ContactScreen />
      <Footer_Com />
    </div>
  );
};

export default App;
