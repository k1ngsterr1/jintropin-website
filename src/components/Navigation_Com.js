import React from "react";

// Styles
import styles from "../styles/navigation-styles/navigation_styles.css";

// Assets
import Logo from "../assets/jintropin-original-logo.svg";

// Links
import { Link, animateScroll as scroll } from "react-scroll";

// Icons
import { FaBars } from "react-icons/fa";
import { FaCross } from "react-icons/fa";

// Menu
import { fallDown as Menu } from "react-burger-menu";

const Navigation = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="navigation">
          <a className="link-main">Главная</a>
          <a
            href="http://ppk365.com/jinsaiyaoye/"
            target="_blank"
            className="link-verification"
          >
            Проверка на подлинность
          </a>
          <Link to="contact-screen" className="contact-button" smooth="true">
            Связаться с нами
          </Link>
        </div>
      </nav>
      <nav className="nav-mob">
        <Menu
          customBurgerIcon={<FaBars></FaBars>}
          customCrossIcon={<FaCross></FaCross>}
        >
          <a id="home" className="menu-item" href="/">
            Home
          </a>
          <a id="about" className="menu-item" href="/about">
            About
          </a>
          <a id="contact" className="menu-item" href="/contact">
            Contact
          </a>
        </Menu>
      </nav>
    </div>
  );
};

export default Navigation;
