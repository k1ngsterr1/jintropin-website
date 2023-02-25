import React from "react";
import { FaWeight, FaWeightHanging } from "react-icons/fa";

import "../styles/cards-styles/cards_styles.css";

const Card_Muscle = () => {
  return (
    <div className="muscle-card">
      <div className="muscle-circle">
        <FaWeightHanging className="weight-icon"></FaWeightHanging>
      </div>
      <h3 className="muscle-c-heading">Рост Мышц</h3>
      <p className="muscle-c-p">
        Lorem ipsum dolor sit amet consectetur. Ac mauris ultrices sem maecenas
        scelerisque lorem nulla.
      </p>
    </div>
  );
};

export default Card_Muscle;
