import React from "react";

function AboutUs(props) {
  return (
    <section className="about_us" id="about_us">
      <div className="txt-box">
        <h2>About us</h2>
        <img src="Decoration.svg" alt="decoration-svg" />
        <p>
          Our mission is to collect donated items from individuals who wish to
          contribute to meaningful causes and distribute them efficiently to
          various organizations that support the less fortunate.
        </p>
        <img className="signature" src="Signature.svg" alt="signature" />
      </div>
      <div className="img-box"></div>
    </section>
  );
}

export default AboutUs;
