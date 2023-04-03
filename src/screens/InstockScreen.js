import React from "react";

import styles from "../styles/instock-styles/instock_styles.css";
import jintropine_card from "../assets/jintropine_card.svg";
import explosion from "../assets/Explosion_2.svg";
import instock from "../assets/instock_arrow.svg";

const InstockScreen = () => {
  return (
    <div className="in-stock-screen" id="in-stock-screen">
      <div className="in-stock-container">
        <div className="in-stock-heading-container">
          <h6 className="in-stock-heading">Препарат в наличии</h6>
          <span className="separator"></span>
        </div>
        <div className="in-stock-content">
          <div className="jintropine-card">
            <img className="jintropine-image" src={jintropine_card}></img>
            <div className="card-content-jin">
              <p className="growth-hormone">Гормон роста</p>
              <h6 className="card-heading">Джинтропин 10 МЕ 3.33мг</h6>
              <p className="p-description">
                Lorem ipsum dolor sit amet consectetur. Rhoncus sagittis cras
                proin tincidunt. Malesuada in sagittis feugiat fermentum magna
                viverra sed nunc. Cursus sapien metus enim quis turpis.
              </p>
              <p className="in-stock">В наличии</p>
              <p className="price">65.000₸</p>
              <button className="stock-button">Посмотреть товар</button>
            </div>
          </div>
          <p className="jintropine-paragraph">
            Lorem ipsum dolor sit amet consectetur. Nisi adipiscing duis lorem
            est tortor. Pretium amet felis viverra eu turpis. Nisi ac sem
            malesuada dictum. Dolor eu vestibulum quis eu duis eget nibh cras.
            Pellentesque placerat tempor adipiscing est pellentesque consectetur
            quam morbi. Pellentesque orci cursus sit et vulputate in venenatis
            lacus at. Aliquam faucibus suscipit aliquam commodo congue aliquet
            nullam id.
          </p>
        </div>
      </div>
      <img className="deco-picture" src={explosion}></img>
      <img className="arrow" src={instock}></img>
    </div>
  );
};

export default InstockScreen;
