import React from "react";

import styles from "../styles/composition-styles/composition_styles.css";
import line_icon from "../assets/line_icon.svg";
import line_icon_white from "../assets/line_icon_white.svg";

const CompositionScreen = () => {
  function Composition_Card(props) {
    return (
      <div className="composition-card-content">
        <div className="card-heading-container">
          <img className="card-icon" src={line_icon}></img>
          <h6 className="card-composition-header">{props.heading}</h6>
        </div>
        <p className="card-composition-paragraph">{props.description}</p>
      </div>
    );
  }

  function Composition_Card_Long(props) {
    return (
      <div className="composition-card-content-l">
        <div className="card-heading-container-l">
          <img className="card-icon" src={line_icon}></img>
          <h6 className="card-composition-header-l">{props.heading}</h6>
        </div>
        <p className="card-composition-paragraph-l">{props.description}</p>
        <p className="bold-text">{props.bold}</p>
      </div>
    );
  }

  function Composition_Card_Long_Blue(props) {
    return (
      <div className="composition-card-content-l-bl">
        <div className="card-heading-container-l-bl">
          <img className="card-icon" src={line_icon_white}></img>
          <h6 className="card-composition-header-l-bl">{props.heading}</h6>
        </div>
        <p className="card-composition-paragraph-l-bl">{props.description}</p>
      </div>
    );
  }

  return (
    <div className="composition-screen" id="composition-screen">
      <div className="composition-container">
        <div className="heading-container">
          <h3 className="composition-heading">Состав Препарат</h3>
          <span className="separator"></span>
        </div>
        <div className="composition-card-container">
          <div className="column-one">
            <Composition_Card
              heading="Действующее вещество"
              description="Соматропин 3,33 мг (10 МЕ);"
            />
            <Composition_Card
              heading="Вспомогательные вещества:"
              description="Глицин, сахароза, метионин, натрия гидрофосфат, полисорбат-80, натрия дигидрофосфат моногидрат."
            />
          </div>
          <div className="column-two">
            <Composition_Card
              heading="Описание:"
              description="Лиофилизат: масса или порошок белого или белого с желтоватым оттенком цвета."
            />
            <Composition_Card
              heading="Характеристика препарата:"
              description="Джинтропин® - это синтезированный с помощью рекомбинантных технологий соматропин, идентичный человеческому гормону роста."
            />
          </div>
          <div className="row-one">
            <Composition_Card_Long
              heading="Условия хранения:"
              description="Хранить в защищенном от света месте при температуре от 2 °С до 8 °С. Не замораживать. Приготовленный раствор хранить при температуре от 2 °С до 8 °С в течение 2 недель. Хранить в недоступном для детей месте."
              bold="Хранение в неразведенном виде до 6-ти месяцев"
            ></Composition_Card_Long>
          </div>
          <div className="row-two">
            <Composition_Card_Long_Blue
              heading="Рекомендованный курс:"
              description="Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis cras proin tincidunt. Malesuada in sagittis feugiat fermentum magna viverra sed nunc. Cursus sapien metus enim quis turpis."
            ></Composition_Card_Long_Blue>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositionScreen;
