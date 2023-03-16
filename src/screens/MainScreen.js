import React from "react";

// Components
import Navigation from "../components/Navigation_Com";

// Styles
import styles from "../styles/main-screen-styles/main_screen.css";

// Assets
import photo from "../assets/New_Main_Photo.svg";
import arrow from "../assets/main_arrow.svg";

// Icons
import { FaTelegramPlane } from "react-icons/fa";

// Fonts
import "../fonts/FTY_STRATEGYCIDE_NCV.ttf";
import { Link } from "react-scroll";

// Translation
import { useTranslation, Trans } from "react-i18next";

const MainScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="main-screen" id="main-screen">
      <Navigation></Navigation>
      <div className="container">
        <div className="main-content">
          <h1 className="main-heading">
            {t("main-heading.key")}{" "}
            <span className="hormone">{t("hormone.key")}</span>
          </h1>
          <p className="description">{t("description.key")}</p>
          <div className="buttons">
            <a
              className="main-button"
              href="https://t.me/Jintropine_Bot"
              target="_blank"
            >
              <FaTelegramPlane className="telegram-icon" />
              {t("main-button.key")}{" "}
            </a>
          </div>
        </div>
        <img className="proto-photo" src={photo} alt="mains_screen_photo"></img>
      </div>
      <img src={arrow} className="arrow-blue"></img>
    </main>
  );
};

export default MainScreen;
