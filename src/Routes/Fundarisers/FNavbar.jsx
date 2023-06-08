import React from "react";
import { useState } from "react";
import Navbar from "../universal_components/Navbar";
import { NavLink } from "react-router-dom";

function FNavbar(props) {
  const [isActiveBurg, setsActiveBurg] = useState("");

  const handleToggle = () => {
    setsActiveBurg(!isActiveBurg);
  };
  return (
    <nav className="nav-orders">
      <Navbar />
      <div className={`nav-homepage ${isActiveBurg ? "active" : ""}`}>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/giveaway">Donate</NavLink>
        <NavLink to="/orders">Your donations</NavLink>
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

export default FNavbar;
