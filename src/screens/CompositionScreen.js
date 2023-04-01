import React from "react";

const CompositionScreen = () => {
  function Composition_Card(props) {
    return (
      <div className="composition-card-content">
        <div className="card-heading-container">
          <img className="card-icon"></img>
          <h6 className="card-composition-header">{props.heading}</h6>
        </div>
        <p className="card-composition-paragraph">{props.description}</p>
      </div>
    );
  }

  return (
    <div className="composition-screen" id="composition-screen">
      <div className="composition-container">
        <div className="heading-container">
          <h3 className="composition-heading">Состав Препарат</h3>
          <span className="separator"></span>
        </div>
        <div className="composition-card-container">
          <div className="column-one">
            <Composition_Card></Composition_Card>
            <Composition_Card></Composition_Card>
          </div>
          <div className="column-two">
            <Composition_Card></Composition_Card>
            <Composition_Card></Composition_Card>
          </div>
          <div className="row-one">
            <Composition_Card></Composition_Card>
            <Composition_Card></Composition_Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompositionScreen;
