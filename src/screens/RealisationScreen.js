import React from "react";

import styles from "../styles/realisation-styles/realisation_styles.css";
import realisation from "../assets/realisation.svg";

const RealisationScreen = () => {
  return (
    <div className="realisation-screen" id="realisation-screen">
      <div className="realisation-container">
        <div className="realisation-heading-container">
          <h3 className="realisation-heading">Условия Реализации</h3>
          <span className="separator"></span>
        </div>
        <div className="realisation-content">
          <div className="realisation-row-1">
            <img className="realisation-img-1" src={realisation}></img>
            <div className="realisation-text-1">
              <h6 className="realisation-heading-1">Lorem ipsum</h6>
              <p className="realisation-paragraph-1">
                Lorem ipsum dolor sit amet consectetur. Arcu ultrices nulla eu
                pellentesque ut pharetra volutpat pharetra. Nulla lectus sed
                nunc phasellus diam id. Pulvinar blandit volutpat id nisl netus
                purus ac id.
              </p>
            </div>
          </div>
          <div className="realisation-row-2">
            <div className="realisation-text-2">
              <h6 className="realisation-heading-2">Lorem ipsum</h6>
              <p className="realisation-paragraph-2">
                Lorem ipsum dolor sit amet consectetur. Arcu ultrices nulla eu
                pellentesque ut pharetra volutpat pharetra. Nulla lectus sed
                nunc phasellus diam id. Pulvinar blandit volutpat id nisl netus
                purus ac id.
              </p>
            </div>
            <img className="realisation-img-2" src={realisation}></img>
          </div>
          <div className="realisation-row-3">
            <img className="realisation-image-3" src={realisation}></img>
            <div className="realisation-text-3">
              <h6 className="realisation-heading-3">Lorem ipsum</h6>
              <p className="realisation-paragraph-3">
                Lorem ipsum dolor sit amet consectetur. Arcu ultrices nulla eu
                pellentesque ut pharetra volutpat pharetra. Nulla lectus sed
                nunc phasellus diam id. Pulvinar blandit volutpat id nisl netus
                purus ac id.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisationScreen;
