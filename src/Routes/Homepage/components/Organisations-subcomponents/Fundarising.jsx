import React from "react";
import { fundarising } from "../../../../helpers/OrganisationList";

function Fundarising(props) {
  return (
    <>
      <div className="organisations-box">
        {fundarising.data.map((element) => (
          <div className="organisation-container" key={element.name}>
            <div className="details">
              <h3>{element.name}</h3>
              <p>{element.description}</p>
            </div>
            <p className="needs">{element.needs}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fundarising;
