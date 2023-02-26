import React from "react";

// Styles
import "../styles/footer-styles/footer_styles.css";
import logo from "../assets/LOGO_WHITE.svg";

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
          <div className="footer-links"></div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer_Com;
