import React from "react";

import { useState } from "react";
import { useRef } from "react";

// Styles
import "../styles/contact-styles/contact_styles.css";

// Assets
import arrow from "../assets/arrow_right.svg";

import emailjs from "@emailjs/browser";
import Card_Power from "../components/Card_Power";

import { useTranslation } from "react-i18next";

const ContactScreen = () => {
  const { t, i18n } = useTranslation();

  const form = useRef();

  // const [send, setSent] = useState("send");
  // const [sendText, setSendText] = useState("Отправить");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [mail, setMail] = useState("");

  function handleClick() {
    // setSent("send");
  }

  function sendEmail(e) {
    e.preventDefault();
    // setSent("sended");
    setFullName("");
    setPhoneNumber("");
    setCity("");
    setMail("");

    emailjs
      .sendForm(
        "service_y27icff",
        "template_evuaxxj",
        e.target,
        "bdkcSbsbst0EBRZfJ"
      )
      .then((res) => {
        console.log("SUCCESS");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contacts" id="contact-screen">
      <div className="contacts-container">
        <div className="contacts-heading-container">
          <h2 className="contacts-heading">{t("contacts-heading.key")}</h2>
          <span className="separator"></span>
        </div>
        <main className="contacts-main-content">
          <section className="contacts-content">
            <h3 className="section-heading">{t("section-heading.key")}</h3>
            <p className="section-paragraph">{t("section-paragraph.key")}</p>
          </section>
          <form
            ref={form}
            className="form"
            id="contacts_form"
            onSubmit={sendEmail}
          >
            <input
              className="name-input"
              type="text"
              name="name"
              placeholder="Имя"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              required={true}
            ></input>
            <input
              className="phone-input"
              type="tel"
              name="phone"
              minLength="10"
              maxLength="11"
              onChange={(event) => setPhoneNumber(event.target.value)}
              value={phoneNumber}
              placeholder="Телефон"
              required={true}
            ></input>
            <input
              className="city-input"
              type="text"
              name="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              placeholder="Город"
              required={true}
            ></input>
            <input
              className="email-input"
              name="email"
              value={mail}
              type="email"
              onChange={(event) => setMail(event.target.value)}
              placeholder="E-mail"
              required={true}
            ></input>
            <button
              // type="submit"
              value="Send"
              onClick={handleClick}
              // form="contacts_submit"
              className="submit-button"
            >
              {t("submit-button.key")}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ContactScreen;
