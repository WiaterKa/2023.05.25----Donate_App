import React from "react";
import { useNavigate } from "react-router-dom";
import handleRedirection from "../../../helpers/handleRedirection";
import HeroNavbar from "./HeroNavbar";

function Hero({ user, setUser }) {
  const navigate = useNavigate();

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
