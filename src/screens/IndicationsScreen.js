import React from "react";

import styles from "../styles/indications-styles/indications_styles.css";

import { FiCheckCircle } from "react-icons/fi";

import { useTranslation, Trans } from "react-i18next";

const IndicationsScreen = () => {
  const { t, i18n } = useTranslation();

  function Card(props) {
    return (
      <div className="card-content">
        <div className="card-heading-container">
          <FiCheckCircle className="icon-check" />
          <h6 className="card-header">{props.heading}</h6>
        </div>
        <p className="card-paragraph">{props.description}</p>
      </div>
    );
  }

  return (
    <div className="indication-screen" id="indication-screen">
      <div className="indication-container">
        <div className="indication-heading-container">
          <h3 className="indication-heading">{t("indications.key")}</h3>
          <span className="separator"></span>
        </div>
        <div className="button-indication">
          <button className="protiv-indication-not">
            {t("protiv-indication-button.key")}
          </button>
          <button className="indication-button-choosen">
            {t("indication-button.key")}
          </button>
        </div>
        <div className="cards-indication">
          <Card
            view={"icon"}
            heading={t("first-card-heading.key")}
            description={t("first-card-paragraph.key")}
          ></Card>
          <Card
            view={"icon"}
            heading={t("second-card-heading.key")}
            description={t("second-card-paragraph.key")}
          ></Card>
          <Card
            view={"icon"}
            heading={t("third-card-heading.key")}
            description={t("third-card-paragraph.key")}
          ></Card>
        </div>
        <div className="medical-indication">
          <p className="medical-ind-text">{t("instruction-text.key")}</p>
          <a className="medical-ind-link">{t("instruction.key")}</a>
        </div>
      </div>
    </div>
  );
};

export default IndicationsScreen;
