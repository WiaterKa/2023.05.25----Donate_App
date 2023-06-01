import React from "react";
import { useState } from "react";

function StepFour({}) {
  //form one
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pc, setPc] = useState("");
  const [mobile, setMobile] = useState("");

  //form two
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [message, setMessage] = useState("");

  return (
    <article className="step-four">
      <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

      <div className="form-container">
        <div className="form-one">
          <h3>Adres odbioru:</h3>
          <div className="form-box">
            <label htmlFor="street">Ulica</label>
            <input type="text" onChange={(e) => setStreet(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="city">Miasto</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="postalCode">Kod pocztowy</label>
            <input type="text" onChange={(e) => setPc(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="phoneNo">Numer telefonu</label>
            <input type="text" onChange={(e) => setMobile(e.target.value)} />
          </div>
        </div>

        <div className="form-two">
          <h3>Termin odbioru:</h3>
          <div className="form-box">
            <label htmlFor="date">Data</label>
            <input type="text" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="hour">Godzina</label>
            <input type="text" onChange={(e) => setHour(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="remarks">Uwagi dla kuriera</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="remarks"
              id="textarea"
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StepFour;
