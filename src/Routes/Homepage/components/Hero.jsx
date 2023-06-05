import React from "react";
import { useNavigate } from "react-router-dom";

import HeroNavbar from "./HeroNavbar";

function Hero() {
  const navigate = useNavigate();

  function handleRedirection() {
    if (localStorage.user) {
      navigate("/giveaway");
    } else {
      window.alert("Aby oddać rzeczy załóz konto lub zaloguj się!");
    }
  }

  return (
    <section className="hero" id="hero">
      <HeroNavbar />

      <div className="hero-main-container">
        <div className="hero-img-container"></div>
        <div className="hero-txt-container">
          <h1 className="h1-hero">
            Start helping people out! <br />
            Place unwanted items in trusted hands!
            <br />
            <img src="Decoration.svg" alt="decoration-svg" />
          </h1>
          <div className="btn-container">
            <button onClick={() => handleRedirection()} className="hero">
              DONATE
            </button>
            <button className="hero">FUNDARISERS</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
