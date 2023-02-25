import React from "react";

// Styles
import styles from "../styles/navigation-styles/navigation_styles.css";

// Assets
import Logo from "../assets/header_assets/logo_jintropin.svg";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <img className="logo" src={Logo}></img>
        <div className="navigation">
          <a className="link-main">Главная</a>
          <a className="link-review">Отзывы</a>
          <a className="link-verification">Проверка на подлинность</a>
          <button className="contact-button">Связаться с нами</button>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
