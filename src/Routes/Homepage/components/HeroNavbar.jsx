import React from "react";
import { Link } from "react-scroll";
import Navbar from "../../universal_components/Navbar";
import { useState } from "react";

function HeroNavbar() {
  const [isActiveBurg, setsActiveBurg] = useState("");

  const handleToggle = () => {
    setsActiveBurg(!isActiveBurg);
  };

  return (
    <nav>
      <Navbar />
      <div className={`nav-homepage ${isActiveBurg ? "active" : ""}`}>
        <Link to="hero" smooth={true} duration={1000}>
          Start
        </Link>
        <Link to="project-info" smooth={true} duration={1000}>
          About the project
        </Link>
        <Link to="about_us" smooth={true} duration={1000}>
          About us
        </Link>
        <Link to="organisations" smooth={true} duration={1000}>
          Fundations and Organisations
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          Contact
        </Link>
      </div>
      <button
        className={`burger ${isActiveBurg ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
    </nav>
  );
}

export default HeroNavbar;
