import React from "react";

// Styles
import "../styles/about-jin-styles/about_jin_styles.css";

// About
import prototype from "../assets/asset_about_svg.svg";

const AboutJinScreen = () => {
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
              Значимость этих проблем настолько очевидна, что новая модель
              организационной деятельности обеспечивает широкому кругу
              (специалистов) участие в формировании дальнейших направлений
              развития.
            </p>
            <button className="more-info">узнать больше о продукте</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutJinScreen;
