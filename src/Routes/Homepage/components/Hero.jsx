import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="hero" id="hero">
      <nav>
        <div className="nav-login">
          <button className="login">Zaloguj</button>
          <button className="register">Załóz konto</button>
        </div>
        <div className="nav-homepage">
          <Link to="hero" smooth={true} duration={1000}>
            Start
          </Link>
          <Link to="hero" smooth={true} duration={1000}>
            O co chodzi?
          </Link>
          <Link to="hero" smooth={true} duration={1000}>
            O nas
          </Link>
          <Link to="hero" smooth={true} duration={1000}>
            Fundacja i organizacje
          </Link>
          <Link to="hero" smooth={true} duration={1000}>
            Kontakt
          </Link>
        </div>
      </nav>

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
