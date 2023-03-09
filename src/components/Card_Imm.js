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
        Гормон роста – это гормон, напрямую участвующий в формировании наших
        клеток, костей и мышц. Когда человек достигает 25-ти лет, уровень
        гормона роста начинает снижаться и процессы восстановления протекают
        медленнее.
      </p>
    </div>
  );
};

export default Card_Imm;
