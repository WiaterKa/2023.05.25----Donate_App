import React from "react";
import Navbar from "../../universal_components/Navbar";

function Hero({ user, setUser }) {
  return (
    <section className="hero" id="hero">
      <Navbar user={user} setUser={setUser} />

      <div className="hero-main-container">
        <div className="hero-img-container"></div>
        <div className="hero-txt-container">
          <h1 className="h1-hero">
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce <br />
            <img src="Decoration.svg" alt="decoration-svg" />
          </h1>
          <div className="btn-container">
            <button className="hero">ODDAJ RZECZY</button>
            <button className="hero">ZORGANIZUJ ZBIÓRKĘ</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
