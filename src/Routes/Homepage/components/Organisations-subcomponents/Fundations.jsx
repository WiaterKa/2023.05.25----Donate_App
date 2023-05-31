import React from "react";
import { useState } from "react";
import { fundations } from "../../../../helpers/OrganisationList";

function Fundations(props) {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [];
  let x = 0;
  let y = 3;
  for (let i = 0; i < 3; i++) {
    pages.push(fundations.data.slice(x, y));
    x = x + 3;
    y = y + 3;
  }

  return (
    <>
      <div className="organisations-box">
        {pages[currentPage].map((element) => (
          <div className="organisation-container" key={element.name}>
            <div className="details">
              <h3>{element.name}</h3>
              <p>{element.description}</p>
            </div>
            <p className="needs">{element.needs}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="pages-box">
          {pages.map((page, index) => {
            let number = index;
            return (
              <p key={index} onClick={() => setCurrentPage(index)}>
                {number + 1}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fundations;
