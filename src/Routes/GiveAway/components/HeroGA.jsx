import React from "react";
import Navbar from "../../universal_components/Navbar";

function HeroGA({ user, setUser }) {
  return (
    <section className="heroGA">
      <Navbar user={user} setUser={setUser} />

      <div className="hero-main-container">
        <div className="heroGA-img-container"></div>
        <div className="hero-txt-container">
          <h1 className="h1-hero">
            Oddaj rzeczy, których już nie chcesz <br />
            POTRZEBUJĄCYM
            <br />
            <img src="Decoration.svg" alt="decoration-svg" />
          </h1>
          <h2 className="h2_heroGA">
            Wystarczą 4 proste kroki
          </h2>
          <div className="btn-container">
            <button className="hero">ODDAJ RZECZY</button>
            <button className="hero">ZORGANIZUJ ZBIÓRKĘ</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroGA;
