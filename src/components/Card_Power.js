import React from "react";
import { FaDumbbell } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";

const Card_Power = () => {
  return (
    <div className="power-card">
      <div className="power-circle">
        <FaDumbbell className="dumbbell-icon" />
      </div>
      <h3 className="power-c-heading">Омоложение</h3>
      <p className="power-c-p">
        Согласно результатам исследований, соматотропин способен омолаживать
        организм. Первый эксперимент, об этом свойстве гормона роста, был
        проведен еще в 80-е годы. Было установлено, что соматропин омолаживает
        организм «возвращая время вспять».
      </p>
    </div>
  );
};

export default Card_Power;
