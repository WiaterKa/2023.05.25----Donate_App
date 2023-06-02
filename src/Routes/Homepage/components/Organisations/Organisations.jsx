import React, { useState } from "react";
import Fundarising from "./Fundarising";
import Fundations from "./Fundations";
import NGOs from "./NGOs";

function Organisations(props) {
  const [tab, setTab] = useState("fundation");
  return (
    <section className="organisations" id="organisations">
      <h2>Komu pomagamy?</h2>
      <img src="Decoration.svg" alt="decoration-svg" />
      <div className="options">
        <p
          className={tab === "fundation" ? "active" : ""}
          onClick={() => setTab("fundation")}
        >
          Fundacjom
        </p>
        <p
          className={tab === "ngo" ? "active" : ""}
          onClick={() => setTab("ngo")}
        >
          Organizacjom pozarządowym
        </p>
        <p
          className={tab === "fundarising" ? "active" : ""}
          onClick={() => setTab("fundarising")}
        >
          Lokalnym zbiórkom
        </p>
      </div>
      <p className="p-main">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>

      {tab === "fundation" && <Fundations />}
      {tab === "ngo" && <NGOs />}
      {tab === "fundarising" && <Fundarising />}
    </section>
  );
}

export default Organisations;
