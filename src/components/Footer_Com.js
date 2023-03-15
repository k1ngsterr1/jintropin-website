import React from "react";
import { useTranslation, Trans } from "react-i18next";

// Styles
import "../styles/footer-styles/footer_styles.css";
import logo from "../assets/jintropin-original-logo.svg";

// Icons
import { FaInstagram, FaSortUp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer_Com = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contacts-mob">
          <h4 className="contacts-header-mob">КОНТАКТЫ</h4>
          <div className="contacts-container-mob">
            <FaInstagram className="instagram-mob"></FaInstagram>
            <FaTelegram className="telegram-mob"></FaTelegram>
            <FaEnvelope className="envelope-mob"></FaEnvelope>
          </div>
        </div>
        <img className="logo-mobile" alt="logo" src={logo}></img>
        <div className="logo-content">
          <img className="logo" alt="logo" src={logo}></img>
          {/* <p className="footer-p">{t("footer-p.key")}</p> */}
          {/* <p className="contact-us">
            {t("contact-us.key")}{" "}
            <span className="underline">{t("underline.key")}</span>
          </p> */}
        </div>
        <nav className="footer-navigation">
          {/* <h4 className="footer-header">{t("footer-header.key")}</h4> */}
          <div className="footer-links">
            <a className="main-link link" href="/">
              {t("main-link.key")}
            </a>
            <a
              href="http://ppk365.com/jinsaiyaoye/"
              target="_blank"
              className="verification-link link"
            >
              {t("verification-link.key")}
            </a>
          </div>
        </nav>
        <div className="footer-contacts">
          {/* <h4 className="contacts-header">{t("contacts-header.key")}</h4> */}
          <div className="contacts-container">
            <FaInstagram className="instagram"></FaInstagram>
            <FaTelegram className="telegram"></FaTelegram>
            <FaEnvelope className="envelope"></FaEnvelope>
          </div>
        </div>
        {/* <Link to="main-screen" smooth="true" className="upper-button">
          {t("upper-button.key")} <FaSortUp className="sort-up-icon" />
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer_Com;
