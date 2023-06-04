import React, { useState } from "react";
import Fundarising from "./Fundarising";
import Fundations from "./Fundations";
import NGOs from "./NGOs";

function Organisations(props) {
  const [tab, setTab] = useState("fundation");
  return (
    <section className="organisations" id="organisations">
      <h2>Whom are we helping?</h2>
      <img src="Decoration.svg" alt="decoration-svg" />
      <div className="options">
        <p
          className={tab === "fundation" ? "active" : ""}
          onClick={() => setTab("fundation")}
        >
          Fundations
        </p>
        <p
          className={tab === "ngo" ? "active" : ""}
          onClick={() => setTab("ngo")}
        >
          Non-profit organisations
        </p>
        <p
          className={tab === "fundarising" ? "active" : ""}
          onClick={() => setTab("fundarising")}
        >
          Local fundraisers
        </p>
      </div>
      <p className="p-main">
        In our database you will find a list of trusted and verified foundations
        with which we we cooperate with. You can check what they do, who they
        help and what they need they need.
      </p>

      {tab === "fundation" && <Fundations />}
      {tab === "ngo" && <NGOs />}
      {tab === "fundarising" && <Fundarising />}
    </section>
  );
}

export default Organisations;
