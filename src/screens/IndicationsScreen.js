import React from "react";

const IndicationsScreen = () => {
  function Card(props) {
    return (
      <div className="card-content">
        <div className="card-heading-container">
          <img className="card-icon"></img>
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
          <h3 className="indication-heading">
            СПОРТИВНЫЕ ПОКАЗАНИЯ И ПРОТИВОПОКАЗАНИЯ
          </h3>
          <div className="button-indication">
            <button className="protiv-indication">Противопоказания</button>
            <button className="indication-button">Показания</button>
          </div>
          <div className="cards-indication">
            <Card
              view={"icon"}
              heading="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur. Arcu ultrices nulla eu pellentesque ut pharetra volutpat pharetra. Nulla lectus sed nunc phasellus diam id. Pulvinar blandit volutpat id nisl netus purus ac id."
            ></Card>
            <Card
              view={"icon"}
              heading="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur. Arcu ultrices nulla eu pellentesque ut pharetra volutpat pharetra. Nulla lectus sed nunc phasellus diam id. Pulvinar blandit volutpat id nisl netus purus ac id."
            ></Card>
            <Card
              view={"icon"}
              heading="Lorem Ipsum"
              description="Lorem ipsum dolor sit amet consectetur. Arcu ultrices nulla eu pellentesque ut pharetra volutpat pharetra. Nulla lectus sed nunc phasellus diam id. Pulvinar blandit volutpat id nisl netus purus ac id."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndicationsScreen;
