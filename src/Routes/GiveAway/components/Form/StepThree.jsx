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
        Location
      </label>

      <select
        name="location"
        id="location"
        onChange={(e) => {
          setLocation(e.target.value);
        }}
      >
        <option value="0">-- choose --</option>
        <option value="Warszawa">Warszawa</option>
        <option value="Kraków">Kraków</option>
        <option value="Katowice">Katowice</option>
        <option value="Wrocław">Wrocław</option>
        <option value="Poznań">Poznań</option>
        <option value="Szczecin">Szczecin</option>
        <option value="Gdańsk">Gdańsk</option>
        <option value="Olsztyn">Olsztyn</option>
        <option value="Lublin">Lublin</option>
        <option value="Rzeszów">Rzeszów</option>
      </select>

      <h3>Who do you want to help?</h3>
      <div className="adressee">
        <p
          className={selectedOption === "dzieciom" ? "active" : ""}
          onClick={() => handleOptionClick("dzieciom")}
        >
          kids
        </p>
        <p
          className={selectedOption === "samotnym mamom" ? "active" : ""}
          onClick={() => handleOptionClick("samotnym mamom")}
        >
          single moms
        </p>
        <p
          className={selectedOption === "bezdomnym" ? "active" : ""}
          onClick={() => handleOptionClick("bezdomnym")}
        >
          homeless
        </p>
        <p
          className={selectedOption === "niepełnosprawnym" ? "active" : ""}
          onClick={() => handleOptionClick("niepełnosprawnym")}
        >
          disabled people
        </p>
        <p
          className={selectedOption === "osobom starszym" ? "active" : ""}
          onClick={() => handleOptionClick("osobom starszym")}
        >
          eldery people
        </p>
      </div>

      <label className="organisation-lbl" htmlFor="organisation">
        Enter the name of the desired organization (optional)
      </label>
      <input type="text" onChange={(e) => setOrganisation(e.target.value)} />
    </article>
  );
}

export default StepThree;
