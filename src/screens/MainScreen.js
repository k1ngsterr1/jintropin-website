import React from "react";

// Components
import Navigation from "../components/Navigation_Com";

// Styles
import styles from "../styles/main-screen-styles/main_screen.css";

// Assets
import photo from "../assets/prototype_photo_svg.svg";

// Icons
import { FaTelegramPlane } from "react-icons/fa";

// Fonts
import "../fonts/FTY_STRATEGYCIDE_NCV.ttf";
import { Link } from "react-scroll";

// Translation
import { useTranslation, Trans } from "react-i18next";
import "../locales/russian/translation.json";

const MainScreen = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="main-screen" id="main-screen">
      <Navigation></Navigation>
      <div className="separator"></div>
      <div className="container">
        <div className="main-content">
          <h1 className="main-heading">{t("main-heading")}</h1>
          <p className="description">
            Значимость этих проблем настолько очевидна, что новая модель
            организационной деятельности обеспечивает широкому кругу
            (специалистов) участие в формировании дальнейших направлений
            развития.
          </p>
          <div className="buttons">
            <button className="main-button">
              <FaTelegramPlane className="telegram-icon" />
              Стать Представителем
            </button>
            <Link to="about-jintropin" smooth="true" className="more-button">
              Подробнее
            </Link>
          </div>
        </div>
        <img className="proto-photo" src={photo} alt="mains_screen_photo"></img>
      </div>
    </main>
  );
};

export default MainScreen;
