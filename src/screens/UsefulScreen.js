import React from "react";
import Card_Imm from "../components/Card_Imm";
import Card_Muscle from "../components/Card_Muscle";
import Card_Power from "../components/Card_Power";

// Styles
import "../styles/useful-styles/useful_styles.css";

const UsefulScreen = () => {
  return (
    <div className="useful-fin">
      <div className="useful-container">
        <div className="useful-heading-container">
          <h2 className="useful-heading">Чем он полезен?</h2>
          <span className="separator"></span>
        </div>
        <section className="cards">
          <Card_Power />
          <Card_Imm />
          <Card_Muscle />
        </section>
        <button className="shop-button">Магазин</button>
      </div>
    </div>
  );
};

export default UsefulScreen;
