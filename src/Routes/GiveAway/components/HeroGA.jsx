import React from "react";
import GANavbar from "./GANavbar";

function HeroGA({}) {
  return (
    <section className="heroGA">
      <GANavbar />

      <div className="hero-main-container">
        <div className="heroGA-img-container"></div>
        <div className="hero-txt-container">
          <h1 className="h1-hero">
            Donate things you no longer want <br />
            TO THOSE IN NEED
            <br />
            <img src="Decoration.svg" alt="decoration-svg" />
          </h1>
          <h2 className="h2_heroGA">All it takes is 4 simple steps</h2>
          <div className="steps-container">
            <div className="step-box">
              <div className="txt-box">
                <h3>1</h3>
                <h4> Choose things</h4>
              </div>
            </div>
            <div className="step-box">
              <div className="txt-box">
                <h3>2</h3> <h4>Pack them in bags</h4>
              </div>
            </div>
            <div className="step-box">
              <div className="txt-box">
                <h3>3</h3>
                <h4> Choose fundation</h4>
              </div>
            </div>
            <div className="step-box">
              <div className="txt-box">
                <h3>4</h3>
                <h4>Book a courier</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="warning">
        <h2>Attention!</h2>
        <p>
          Fill in the details about your items. This will help us know to whom
          it is best to donate them.
        </p>
      </div>
    </section>
  );
}

export default HeroGA;
