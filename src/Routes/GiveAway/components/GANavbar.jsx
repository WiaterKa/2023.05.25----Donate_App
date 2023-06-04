import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Navbar from "../../universal_components/Navbar";

function GANavbar() {
  return (
    <nav>
      <Navbar />
      <div className="nav-homepage">
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/orders">Your donations</NavLink>
        <NavLink to="/addorganisation">Add organisation</NavLink>
        <NavLink to="/addorganisation">Fundarisers</NavLink>
        <Link to="contact" smooth={true} duration={1000}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default GANavbar;
