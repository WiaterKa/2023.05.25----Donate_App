import React, { useState } from "react";

function StepThree({
  setLocation,
  selectedOption,
  setSelectedOption,
  setOrganisation,
}) {


  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <article className="step-three">
      <label className="location-lbl" htmlFor="location">
        Lokalizacja
      </label>

      <select
        name="location"
        id="location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      >
        <option value="0">-- wybierz --</option>
        <option value="1">Warszawa</option>
        <option value="2">Kraków</option>
        <option value="3">Katowice</option>
        <option value="4">Wrocław</option>
        <option value="5">Poznań</option>
        <option value="6">Szczecin</option>
        <option value="7">Gdańsk</option>
        <option value="8">Olsztyn</option>
        <option value="9">Lublin</option>
        <option value="10">Rzeszów</option>
      </select>

      <h3>Komu chcesz pomóc?</h3>
      <div className="adressee">
        <p
          className={selectedOption === "dzieciom" ? "active" : ""}
          onClick={() => handleOptionClick("dzieciom")}
        >
          dzieciom
        </p>
        <p
          className={selectedOption === "samotnym mamom" ? "active" : ""}
          onClick={() => handleOptionClick("samotnym mamom")}
        >
          samotnym mamom
        </p>
        <p
          className={selectedOption === "bezdomnym" ? "active" : ""}
          onClick={() => handleOptionClick("bezdomnym")}
        >
          bezdomnym
        </p>
        <p
          className={selectedOption === "niepełnosprawnym" ? "active" : ""}
          onClick={() => handleOptionClick("niepełnosprawnym")}
        >
          niepełnosprawnym
        </p>
        <p
          className={selectedOption === "osobom starszym" ? "active" : ""}
          onClick={() => handleOptionClick("osobom starszym")}
        >
          osobom starszym
        </p>
      </div>

      <label className="organisation-lbl" htmlFor="organisation">
        Wpisz nazwę odpowiedniej organizacji (opcjonalnie)
      </label>
      <input type="text" onChange={(e) => setOrganisation(e.target.value)} />
    </article>
  );
}

export default StepThree;
