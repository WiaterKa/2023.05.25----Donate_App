import React from "react";

function StepFive({
  options,
  bags,
  location,
  selectedOption,
  organisation,
  street,
  city,
  pc,
  mobile,
  date,
  hour,
  message,
}) {
  return (
    <article className="step-five" style={{ height: "70rem", width: "140%" }}>
      <h2>Podsumowanie Twojej darowizny</h2>

      <h3>Oddajesz:</h3>
      <div className="box-summary">
        <img src="Icon-1.svg" alt="summary-one-svg" />
        <h4>
          {bags} worki,{options.join(", ")}, {selectedOption}
        </h4>
      </div>
      <div className="box-summary">
        <img src="Icon-2.svg" alt="summary-two-svg" />
        <h4>dla lokalizacji {location}</h4>
      </div>

      <div className="tables-container">
        <div className="table">
          <h5>Adres odbioru:</h5>
          <div className="table-box">
            <p className="p-table">Ulica</p>
            <p className="p-table">{street}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Miasto</p>
            <p className="p-table">{city}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Kod pocztowy</p>
            <p className="p-table">{pc}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Numer telefonu</p>
            <p className="p-table">{mobile}</p>
          </div>
        </div>

        <div className="table">
          <h5>Termin odbioru:</h5>
          <div className="table-box">
            <p className="p-table">Data</p>
            <p className="p-table">{date}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Godzina</p>
            <p className="p-table">{hour}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Uwagi dla kuriera</p>
            <p className="p-table">{message}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StepFive;
