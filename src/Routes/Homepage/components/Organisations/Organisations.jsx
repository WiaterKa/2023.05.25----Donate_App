import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Fundarising from "./Fundarising";
import Fundations from "./Fundations";
import NGOs from "./NGOs";

function Organisations(props) {
  return (
    <section className="organisations" id="organisations">
      <h2>Komu pomagamy?</h2>
      <img src="Decoration.svg" alt="decoration-svg" />
      <div className="options">
        <NavLink to="/">Fundacjom</NavLink>
        <NavLink to="/ngos">Organizacjom pozarządowym</NavLink>
        <NavLink to="/fundarisings">Lokalnym zbiórkom</NavLink>
      </div>
      <p className="p-main">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <Routes>
        <Route path="/" element={<Fundations />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/fundarisings" element={<Fundarising />} />
      </Routes>
    </section>
  );
}

export default Organisations;
