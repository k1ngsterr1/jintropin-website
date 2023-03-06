import React from "react";

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
  const [open, setOpen] = useState("false");
  let languageButtonText = "Русский";
  let [textLanguage, setTextLanguage] = useState(languageButtonText);

  function onSelect({ key }) {
    switch (key) {
      case "russian-language":
        setTextLanguage = "Русский";
        languageButtonText = setTextLanguage;
        console.log(languageButtonText);
        break;

      case "english-language":
        setTextLanguage = "English";
        languageButtonText = setTextLanguage;
        console.log(languageButtonText);
        break;

      case "kazakh-language":
        setTextLanguage = "Kazakh";
        languageButtonText = setTextLanguage;
        console.log(languageButtonText);
        break;
    }
  }

  const hamburgerMenu = (
    <FaBars className="bars" onClick={() => setOpen(!open)}></FaBars>
  );

  const closeMenu = (
    <RxCross2 className="cross-icon" onClick={() => setOpen(!open)}></RxCross2>
  );

  const menuCallback = () => (
    <Menu onSelect={onSelect}>
      <MenuItem key="russian-language" className="ru-item">
        <span class="fi fi-ru fis"></span> Русский
      </MenuItem>
      <MenuItem key="english-language" className="eng-item">
        <span class="fi fi-us fis"></span> English
      </MenuItem>
      <MenuItem key="kazakh-language" className="kz-item">
        <span class="fi fi-kz fis"></span> Қазақша
      </MenuItem>
    </Menu>
  );

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
          <Dropdown
            trigger={["click"]}
            overlay={menuCallback}
            animation="slide-up"
          >
            <button
              onClick={() => console.log(languageButtonText)}
              className="language-button"
            >
              {languageButtonText}
              <FaCaretDown className="arrow-down"></FaCaretDown>
            </button>
          </Dropdown>
          <Link to="contact-screen" className="contact-button" smooth="true">
            Связаться с нами
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
