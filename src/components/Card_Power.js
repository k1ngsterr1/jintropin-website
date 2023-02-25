import React from "react";
import { FaDumbbell } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";

const Card_Power = () => {
  return (
    <div className="power-card">
      <div className="power-circle">
        <FaDumbbell className="dumbbell-icon" />
      </div>
      <h3 className="power-c-heading">Сила</h3>
      <p className="power-c-p">
        Lorem ipsum dolor sit amet consectetur. Ac mauris ultrices sem maecenas
        scelerisque lorem nulla.
      </p>
    </div>
  );
};

export default Card_Power;
