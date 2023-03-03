import React from "react";

// Components
import Navigation from "../components/Navigation_Com";

// Styles
import styles from "../styles/main-screen-styles/main_screen.css";

// Assets
import photo from "../assets/prototype_photo_svg.svg";

// Icons
import { FaTelegramPlane } from "react-icons/fa";

// Fonts
import "../fonts/FTY_STRATEGYCIDE_NCV.ttf";

import { Link } from "react-scroll";

const MainScreen = () => {
  return (
    <main className="main-screen" id="main-screen">
      <Navigation></Navigation>
      <div className="separator"></div>
      <div className="container">
        <div className="main-content">
          <h1 className="main-heading">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Id malesuada suspendisse
            sagittis urna tortor. Placerat velit in habitant sit. Interdum at
            donec donec dui scelerisque morbi dolor.
          </p>
          <div className="buttons">
            <button className="main-button">
              <FaTelegramPlane className="telegram-icon" />
              Стать Представителем
            </button>
            <Link to="about-jintropin" smooth="true" className="more-button">
              Подробнее
            </Link>
          </div>
        </div>
        <img className="proto-photo" src={photo}></img>
      </div>
    </main>
  );
};

export default MainScreen;
