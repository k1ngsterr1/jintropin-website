import React from "react";

// Styles
import "../styles/footer-styles/footer_styles.css";
import logo from "../assets/LOGO_WHITE.svg";

// Icons
import { FaInstagram, FaSortUp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer_Com = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-content">
          <img className="logo" alt="logo" src={logo}></img>
          <p className="footer-p">
            Хотите стать представителемв вашем регионе?
          </p>
          <p className="contact-us">
            Свяжитесь с нами по электронной:{" "}
            <span className="underline">genopharm.ltd@gmail.com</span>
          </p>
        </div>
        <nav className="footer-navigation">
          <h4 className="footer-header">НАВИГАЦИЯ</h4>
          <div className="footer-links">
            <a className="main-link link">Главная</a>
            <a
              href="http://ppk365.com/jinsaiyaoye/"
              target="_blank"
              className="verification-link link"
            >
              Проверка на подлинность
            </a>
          </div>
        </nav>
        <div className="footer-contacts">
          <h4 className="contacts-header">КОНТАКТЫ</h4>
          <div className="contacts-container">
            <FaInstagram className="instagram"></FaInstagram>
            <FaTelegram className="telegram"></FaTelegram>
            <FaEnvelope className="envelope"></FaEnvelope>
          </div>
        </div>
        <Link to="main-screen" smooth="true" className="upper-button">
          подняться вверх <FaSortUp className="sort-up-icon" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer_Com;
