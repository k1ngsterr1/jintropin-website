import React from "react";

// Styles
import styles from "../styles/navigation-styles/navigation_styles.css";

// Assets
import Logo from "../assets/header_assets/logo_jintropin.svg";

// Links
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <img className="logo" src={Logo}></img>
        <div className="navigation">
          <a className="link-main">Главная</a>
          <a className="link-verification">Проверка на подлинность</a>
          <Link to="contact-screen" className="contact-button" smooth="true">
            Связаться с нами
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
