import React from "react";
import { useSelector } from "react-redux";

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
  const prevOptions = useSelector((state) => state.form.options);

  return (
    <article className="step-five">
      <h2>Summary of your donation</h2>

      <h3>You donate:</h3>
      <div className="box-summary">
        <img src="/Icon-1.svg" alt="summary-one-svg" />
        <h4>
          {bags} bags,{" "}
          {prevOptions.length > 1 ? prevOptions.join(", ") : prevOptions},
          {selectedOption}
        </h4>
      </div>
      <div className="box-summary">
        <img src="/Icon-2.svg" alt="summary-two-svg" />
        <h4>Location: {location}</h4>
      </div>

      <div className="tables-container">
        <div className="table">
          <h5>Collection address:</h5>
          <div className="table-box">
            <p className="p-table">Street</p>
            <p className="p-table">{street}</p>
          </div>
          <div className="table-box">
            <p className="p-table">City</p>
            <p className="p-table">{city}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Postal code</p>
            <p className="p-table">{pc}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Phone number</p>
            <p className="p-table">{mobile}</p>
          </div>
        </div>

        <div className="table">
          <h5>Collection date:</h5>
          <div className="table-box">
            <p className="p-table">Date</p>
            <p className="p-table">{date}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Hour</p>
            <p className="p-table">{hour}</p>
          </div>
          <div className="table-box">
            <p className="p-table">Notes to courier</p>
            <p className="p-table">{message}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default StepFive;
