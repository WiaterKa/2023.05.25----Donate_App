import React from "react";

function AboutUs(props) {
  return (
    <section className="about_us">
      <div className="txt-box">
        <h2>O nas</h2>
        <img src="Decoration.svg" alt="decoration-svg" />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img className="signature" src="Signature.svg" alt="signature" />
      </div>
      <div className="img-box"></div>
    </section>
  );
}

export default AboutUs;
