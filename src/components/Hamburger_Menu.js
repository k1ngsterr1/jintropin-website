import React from "react";

import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import burgerIcon from "../assets/burger-menu.svg";

import { Link } from "react-scroll";

const Hamburger_Menu = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [open, setOpen] = useState(false);

  var styles = {
    bmBurgerButton: {
      position: "absolute",
      width: "clamp(16px,1.6666666666666667vw,64px)",
      height: "clamp(12px,1.25vw,48px)",
      left: "clamp(878px,91.45833333333333vw,3512px)",
      top: "clamp(31.5px,3.28125vw,126px)",
    },
    bmBurgerBars: {
      background: "#588EF7",
      width: "clamp(18px,1.875vw,72px)",
      height: "clamp(2px,0.20833333333333334vw,8px)",
      borderRadius: "120px",
    },
    bmBurgerBarsHover: {
      background: "#1f1f1f",
    },
    bmCrossButton: {
      height: "36px",
      width: "36px",
      left: "315px",
      right: "24px",
      top: "31px",
      bottom: "0",
    },
    bmCross: {
      background: "#588EF7",
      width: "3px",
      height: "27px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "#FFFFFF",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflowX: "hidden",
      overflowY: "hidden",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingRight: "clamp(136px,14.166666666666666vw,544px)",
      paddingTop: "clamp(22.5px,2.34375vw,90px)",
      fontFamily: "Raleway",
      fontStyle: "normal",
      fontWeight: "600",
      fontSize: "clamp(9.25px,0.9635416666666666vw,37px)",
      textAlign: "left",
      color: "#00346E",
    },
    bmItem: {
      display: "inline-block",
      marginTop: "clamp(12px,1.25vw,48px)",
    },
    bmOverlay: {
      left: "0",
      right: "0",
      bottom: "0",
      top: "0",
      width: "100vw",
      height: "1228.3vh",
      position: "absolute",
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <Menu right width={378} styles={styles} outerContainerId="nav-container">
      <Link to="main-screen" smooth={true} className="main-link">
        {t("link-main.key")}
      </Link>
      <Link to="about-jintropin" smooth={true} className="main-link">
        {t("about-drug.key")}
      </Link>
      <Link to="indication-screen" smooth={true} className="main-link">
        {t("indications.key")}
      </Link>
      <Link to="in-stock-screen" smooth={true} className="main-link">
        {t("available.key")}
      </Link>
      <Link to="verification-screen" smooth={true} className="main-link">
        {t("link-verification.key")}
      </Link>
      <Link to="document-screen" smooth={true} className="main-link">
        {t("document.key")}
      </Link>
      <Link to="realisation-screen" smooth={true} className="main-link">
        {t("realisation-conditions.key")}
      </Link>
      <div className="languages-container">
        <span
          onClick={() => changeLanguage("ru")}
          className="fi fi-ru fi"
          style={{
            cursor: "pointer",
            fontSize: "clamp(11px,1.1458333333333333vw,44px)",
          }}
        ></span>
        <span
          onClick={() => changeLanguage("us")}
          className="fi fi-us fi"
          style={{
            cursor: "pointer",
            fontSize: "clamp(11px,1.1458333333333333vw,44px)",
            marginLeft: "clamp(10px,1.0416666666666667vw,40px)",
          }}
        ></span>
        <span
          onClick={() => changeLanguage("kz")}
          className="fi fi-kz fi"
          style={{
            cursor: "pointer",
            fontSize: "clamp(11px,1.1458333333333333vw,44px)",
            marginLeft: "clamp(10px,1.0416666666666667vw,40px)",
          }}
        ></span>
      </div>
      <Link
        className="main-link"
        to="contact-screen"
        smooth={true}
        style={{
          "font-family": "Raleway",
          "font-style": "normal",
          "font-weight": "700",
          "font-size": "clamp(11px,1.1458333333333333vw,44px)",
          width: "clamp(148.5px,15.46875vw,594px)",
          height: "clamp(24.42px,2.54375vw,97.68px)",
          backgroundColor: "#588EF7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          borderRadius: "100px",
          marginTop: "clamp(150px,15.625vw,600px)",
          margin: "auto",
        }}
      >
        {t("contact-button.key")}
      </Link>
    </Menu>
  );
};

export default Hamburger_Menu;
