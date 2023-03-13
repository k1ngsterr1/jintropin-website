import React from "react";
import Navigation from "../components/Navigation_Com";
import { useTranslation } from "react-i18next";

import "../styles/more-info-styles/more-info.css";
import { useNavigate } from "react-router-dom";
import image from "../assets/more-info.svg";

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
      <div className="separator"></div>
      <div className="more-info-container">
        <div className="paragraph-container">
          <p className="info-paragraph">{t("info-paragraph.info-p")}</p>
          <div className="buttons-container">
            <button className="go-back-button" onClick={() => navigate("/")}>
              Вернуться обратно
            </button>
            <button className="main-button">
              <FaTelegramPlane className="telegram-icon" />
              Стать Представителем
            </button>
          </div>
        </div>
      </div>
      <img className="more-info-img" src={image}></img>
      <Footer_Com />
    </div>
  );
};

export default MoreInfo;
