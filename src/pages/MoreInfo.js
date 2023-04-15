import React from "react";
import Navigation from "../components/Navigation_Com";
import { useTranslation } from "react-i18next";

import "../styles/more-info-styles/more-info.css";
import { useNavigate } from "react-router-dom";
import image from "../assets/Muscle_Man.svg";

// Icons
import { FaTelegramPlane } from "react-icons/fa";
import Footer_Com from "../components/Footer_Com";

const MoreInfo = () => {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="more-info-page" id="main-screen">
      <Navigation></Navigation>
      <div className="more-info-container">
        <div className="paragraph-container">
          <p className="info-paragraph">{t("info-paragraph.info-p")}</p>
          <div className="buttons-container">
            <button className="go-back-button" onClick={() => navigate("/")}>
              {t("back-button.key")}
            </button>
            <a
              className="main-button"
              href="https://t.me/Jintropine_Bot"
              target="_blank"
            >
              {t("main-button.key")}{" "}
            </a>
          </div>
        </div>
      </div>
      <img className="more-info-img" src={image}></img>
      <Footer_Com />
    </div>
  );
};

export default MoreInfo;
