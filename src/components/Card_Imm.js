import React from "react";
import { FaHeart } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";

const Card_Imm = () => {
  return (
    <div className="imm-card">
      <div className="imm-circle">
        <FaHeart className="heart-icon"></FaHeart>
      </div>
      <h3 className="imm-c-heading">Иммунитет</h3>
      <p className="imm-c-p">
        Значимость этих проблем настолько очевидна, что новая модель
        организационной
      </p>
    </div>
  );
};

export default Card_Imm;
