import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Navbar from "../../universal_components/Navbar";

function GANavbar() {
  return (
    <nav>
      <Navbar />
      <div className="nav-homepage">
        <NavLink to="/">Strona Główna</NavLink>
        <NavLink to="/orders">Twoje zamówienia</NavLink>
        <NavLink to="/addorganisation">Dodaj organizację</NavLink>
        <NavLink to="/addorganisation">Zbiórki</NavLink>
        <Link to="contact" smooth={true} duration={1000}>
          Kontakt
        </Link>
      </div>
    </nav>
  );
}

export default GANavbar;
