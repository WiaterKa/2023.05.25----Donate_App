import React from "react";
import { Link } from "react-scroll";
import Navbar from "../../universal_components/Navbar";

function HeroNavbar() {
  return (
    <nav>
      <Navbar />
      <div className="nav-homepage">
        <Link to="hero" smooth={true} duration={1000}>
          Start
        </Link>
        <Link to="project-info" smooth={true} duration={12000}>
          O co chodzi?
        </Link>
        <Link to="about_us" smooth={true} duration={1000}>
          O nas
        </Link>
        <Link to="organisations" smooth={true} duration={1000}>
          Fundacja i organizacje
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          Kontakt
        </Link>
      </div>
    </nav>
  );
}

export default HeroNavbar;
