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
          <h2 className="h2_heroGA">Wystarczą 4 proste kroki</h2>
          <div className="steps-container">
            <div className="step-box">
              <div className="txt-box">
                <h3>1</h3>
                <h4> Wybierz rzeczy</h4>
              </div>
            </div>
            <div className="step-box">
              <div className="txt-box">
                <h3>2</h3> <h4>Spakuj je w worki</h4>
              </div>
            </div>
            <div className="step-box">
              <div className="txt-box">
                <h3>3</h3>
                <h4> Wybierz fundację</h4>
              </div>
            </div>
            <div className="step-box">
              <div className="txt-box">
                <h3>4</h3>
                <h4>Zamów kuriera</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="warning">
        <h2>Wazne!</h2>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu najlepiej je przekazać.
        </p>
      </div>
    </section>
  );
}

export default HeroGA;
