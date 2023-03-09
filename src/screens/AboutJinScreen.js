import React from "react";

import { useNavigate } from "react-router-dom";

// Styles
import "../styles/about-jin-styles/about_jin_styles.css";

// About
import prototype from "../assets/asset_about_svg.svg";

const AboutJinScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="about-jin" id="about-jintropin">
      <div className="about-jin-container">
        <div className="about-heading-container">
          <h1 className="about-heading">Что такое джинтропин</h1>
          <div className="separator"></div>
        </div>
        <div className="about-content">
          {/* For Icon */}
          <img
            src={prototype}
            className="about-proto"
            alt="about_screen_photo"
          ></img>
          <div className="about-paragraph">
            <p className="about-text">
              Препарат Джинтропин® является генно-инженерным соматотропным
              гормоном. Стимулирует скелетный и соматический рост, а также
              оказывает выраженное влияние на метаболические процессы.
              Стимулирует рост костей скелета, воздействуя на пластинки эпифиза
              трубчатых костей, костный метаболизм.
            </p>
            <button
              className="more-info"
              onClick={() => navigate("/information")}
            >
              узнать больше о продукте
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutJinScreen;
