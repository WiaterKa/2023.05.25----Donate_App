import React from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../../universal_components/Navbar";
import { useState } from "react";

function GANavbar() {
  const [isActiveBurg, setsActiveBurg] = useState("");

  const handleToggle = () => {
    setsActiveBurg(!isActiveBurg);
  };

  return (
    <nav>
      <Navbar />
      <div className={`nav-homepage ${isActiveBurg ? "active" : ""}`}>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/orders">Your donations</NavLink>
        <NavLink to="/fundarisers">Fundarisers</NavLink>
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

export default GANavbar;
