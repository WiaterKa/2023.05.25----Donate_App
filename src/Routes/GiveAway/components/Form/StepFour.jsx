import React from "react";
import { useState } from "react";

function StepFour({
  setStreet,
  setCity,
  setPc,
  setMobile,
  setDate,
  setHour,
  setMessage,
}) {
  return (
    <article className="step-four">
      <h2>
        Enter the address and date when the courier shall pick up the items
      </h2>

      <div className="form-container">
        <div className="form-one">
          <h3>Collection address:</h3>
          <div className="form-box">
            <label htmlFor="street">Street</label>
            <input type="text" onChange={(e) => setStreet(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="city">City</label>
            <input type="text" onChange={(e) => setCity(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="postalCode">Postal code</label>
            <input type="text" onChange={(e) => setPc(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="phoneNo">Phone number</label>
            <input type="text" onChange={(e) => setMobile(e.target.value)} />
          </div>
        </div>

        <div className="form-two">
          <h3>Collection date:</h3>
          <div className="form-box">
            <label htmlFor="date">Date</label>
            <input type="text" onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="hour">Hour</label>
            <input type="text" onChange={(e) => setHour(e.target.value)} />
          </div>
          <div className="form-box">
            <label htmlFor="remarks">Notes to courier</label>
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
