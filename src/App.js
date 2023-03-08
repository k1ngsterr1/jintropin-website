import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

// Screens
import MainScreen from "./screens/MainScreen";

// Styles
import styles from "./styles/main-screen-styles/main_screen.css";
import AboutJinScreen from "./screens/AboutJinScreen";
import UsefulScreen from "./screens/UsefulScreen";
import ContactScreen from "./screens/ContactScreen";
import Footer_Com from "./components/Footer_Com";

// Language
import i18n from "./i18n";

const App = () => {
  const [locale, setLocale] = useState(i18n.language);
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
