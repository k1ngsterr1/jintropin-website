import React from "react";
import Navigation from "../components/Navigation_Com";

import "../styles/more-info-styles/more-info.css";
import { useNavigate } from "react-router-dom";
import image from "../assets/more-info.svg";

// Icons
import { FaTelegramPlane } from "react-icons/fa";
import Footer_Com from "../components/Footer_Com";

const MoreInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="more-info-page" id="main-screen">
      <Navigation></Navigation>
      <div className="separator"></div>
      <div className="more-info-container">
        <div className="paragraph-container">
          <p className="info-paragraph">
            Препарат Джинтропин® является генно-инженерным соматотропным
            гормоном. Стимулирует скелетный и соматический рост, а также
            оказывает выраженное влияние на метаболические процессы. Стимулирует
            рост костей скелета, воздействуя на пластинки эпифиза трубчатых
            костей, костный метаболизм. Способствует нормализации структуры тела
            посредством увеличения мышечной массы и снижения жировой массы тела.
            У больных с дефицитом гормона роста и остеопорозом заместительная
            терапия приводит к нормализации минерального состава и плотности
            костей. Увеличивает число и размер клеток мышц, печени, вилочковой
            железы, половых желез, надпочечников, щитовидной железы. Стимулирует
            транспорт аминокислот в клетку и синтез белков, снижает уровень
            холестерина, воздействуя на профиль липидов и липопротеинов.
            Подавляет высвобождение инсулина. Способствует задержке натрия,
            калия и фосфора. Увеличивает массу тела, мышечную активность и
            физическую выносливость
          </p>
          <div className="buttons-container">
            <button className="go-back-button" onClick={() => navigate("/")}>
              Вернуться обратно
            </button>
            <button className="main-button">
              <FaTelegramPlane className="telegram-icon" />
              Стать Представителем
            </button>
          </div>
        </div>
      </div>
      <img className="more-info-img" src={image}></img>
      <Footer_Com />
    </div>
  );
};

export default MoreInfo;
