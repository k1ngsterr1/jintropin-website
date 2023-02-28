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
          <img src={prototype} className="about-proto"></img>
          <div className="about-paragraph">
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur. Posuere duis dictumst
              velit facilisis eget adipiscing turpis. Tincidunt tincidunt risus
              varius lorem pharetra dui. Ultrices placerat commodo elit dictum.
              Nec nec elementum cras ut.
            </p>
            <button className="more-info">узнать больше о продукте</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutJinScreen;
