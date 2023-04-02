import React from "react";

import disclaimer from "../assets/disclaimer_icon.svg";

import styles from "../styles/disclaimer-styles/disclaimer_styles.css";

const DisclaimerScreen = () => {
  return (
    <div className="disclaimer-screen" id="disclaimer-screen">
      <div className="disclaimer-container">
        <div className="disclaimer-heading-container">
          <h3 className="disclaimer-heading">Дисклеймер</h3>
          <span className="separator"></span>
        </div>
        <div className="disclaimer-content">
          <p className="disclaimer-paragraph">
            Lorem ipsum dolor sit amet consectetur. Leo fringilla malesuada
            magna et aliquam facilisis nascetur elementum bibendum. Vestibulum
            id ridiculus laoreet volutpat. Pulvinar varius adipiscing venenatis
            sem. Rutrum vestibulum aliquam ac velit et netus.
          </p>
          <p className="disclaimer-bold-paragraph">
            Запрещено употреблять лиам не достигшим 21-го года
          </p>
          <img className="disclaimer-icon" src={disclaimer}></img>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerScreen;
