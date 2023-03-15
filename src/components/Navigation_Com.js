import React from "react";
import { useTranslation, Trans } from "react-i18next";

// Styles
import styles from "../styles/navigation-styles/navigation_styles.css";

// Assets
import Logo from "../assets/jintropin-original-logo.svg";
import Pills from "../assets/pills.svg";

// Links
import { Link, animateScroll as scroll } from "react-scroll";

// Icons
import { FaBars, FaCaretDown, FaCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

// Dropdown
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";

// Hooks
import { useState } from "react";
import Nav_Links from "./Nav_Links";

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = useState(false);

  const hamburgerMenu = (
    <FaBars className="bars" onClick={() => setOpen(!open)}></FaBars>
  );

  const closeMenu = (
    <RxCross2 className="cross-icon" onClick={() => setOpen(!open)}></RxCross2>
  );

  return (
    <div className="nav-container">
      <nav className="nav">
        <img className="logo" src={Logo} alt="logo"></img>
        <div className="navigation">
          <a className="link-main">{t("link-main.key")}</a>
          <Link
            className="link-verification"
            to="verification-screen"
            smooth={true}
          >
            {t("link-verification.key")}
          </Link>
          <div className="languages-container">
            <span
              onClick={() => changeLanguage("ru")}
              className="fi fi-ru fi"
            ></span>
            <span
              onClick={() => changeLanguage("us")}
              className="fi fi-us fi"
            ></span>
            <span
              onClick={() => changeLanguage("kz")}
              className="fi fi-kz fi"
            ></span>
          </div>
          <Link to="contact-screen" className="contact-button" smooth="true">
            {t("contact-button.key")}
          </Link>
        </div>
      </nav>
      <nav className="nav-mob">
        <img className="mobile-logo" src={Pills}></img>
        <div className="for-burger-menu">
          {open ? closeMenu : hamburgerMenu}
          {open && <Nav_Links></Nav_Links>}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
