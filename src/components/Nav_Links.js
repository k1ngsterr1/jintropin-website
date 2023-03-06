import React from "react";

// Link
import { Link } from "react-scroll";

const Nav_Links = () => {
  return (
    <div className="nav-links-mobile">
      <span className="mobile-separator"></span>
      <a className="main-link-mobile">Главная</a>
      <a
        className="verification-mobile-link"
        href="http://ppk365.com/jinsaiyaoye/"
        target="_blank"
      >
        Проверка на подлинность
      </a>
      <Link to="contact-screen" smooth={true} className="contact-with-us-mob">
        Связаться с нами
      </Link>
    </div>
  );
};

export default Nav_Links;
