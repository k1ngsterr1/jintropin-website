import React from "react";
import { useTranslation, Trans } from "react-i18next";
// Link
import { Link } from "react-scroll";

const Nav_Links = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="nav-links-mobile">
      <span className="mobile-separator"></span>
      <a className="main-link-mobile" href="/">
        {t("link-main.key")}
      </a>
      <a
        className="verification-mobile-link"
        href="http://ppk365.com/jinsaiyaoye/"
        target="_blank"
      >
        {t("verification-link.key")}
      </a>
      <Link to="contact-screen" smooth={true} className="contact-with-us-mob">
        {t("contact-button.key")}
      </Link>
      <div className="language-buttons">
        {" "}
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
    </div>
  );
};

export default Nav_Links;
