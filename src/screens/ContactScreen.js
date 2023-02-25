import React from "react";

// Styles
import "../styles/contact-styles/contact_styles.css";

// Assets
import arrow from "../assets/arrow_right.svg";

const ContactScreen = () => {
  return (
    <div className="contacts">
      <div className="contacts-container">
        <div className="contacts-heading-container">
          <h2 className="contacts-heading">Связаться с нами</h2>
          <span className="separator"></span>
        </div>
        <main className="contacts-main-content">
          <section className="contacts-content">
            <h3 className="section-heading">
              Свяжитесь с представителем в своем городе!
            </h3>
            <p className="section-paragraph">
              Lorem ipsum dolor sit amet consectetur. Mattis faucibus velit eget
              viverra purus enim erat volutpat lorem. Et nulla ut sed cursus ac
              lectus ac. Praesent purus ultrices vitae tellus blandit fermentum.
            </p>
          </section>
          <img src={arrow} alt="arrow" className="arrow-svg"></img>
        </main>
      </div>
    </div>
  );
};

export default ContactScreen;
