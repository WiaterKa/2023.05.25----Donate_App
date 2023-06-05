import React from "react";
import { useState } from "react";

function OrderTab({ element }) {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="order">
      <div className="summary-main">
        <div className="summary-txt">
          <h3>Order from</h3>

          <p>
            {element.dateOrder.toDate().toLocaleString("en-US", {
              dateStyle: "short",
              timeStyle: "short",
            })}
          </p>
        </div>
        <button
          onClick={() => {
            if (selectedOption === JSON.stringify(element.dateOrder)) {
              setSelectedOption("");
            } else {
              setSelectedOption(JSON.stringify(element.dateOrder));
            }
          }}
        >
          Click here for more details!
        </button>
      </div>
      <div
        className="summary-details"
        id={
          selectedOption === JSON.stringify(element.dateOrder) ? "active" : ""
        }
      >
        <div className="table-box">
          <p className="p-table-heading">Street</p>
          <p className="p-table">{element.street}</p>
        </div>
        <div className="table-box">
          <p className="p-table-heading">City</p>
          <p className="p-table">{element.city}</p>
        </div>
        <div className="table-box">
          <p className="p-table-heading">Postal code</p>
          <p className="p-table">{element.pc}</p>
        </div>
        <div className="table-box">
          <p className="p-table-heading">Phone number</p>
          <p className="p-table">{element.mobile}</p>
        </div>

        <div className="table-box">
          <p className="p-table-heading">Date</p>
          <p className="p-table">{element.date}</p>
        </div>
        <div className="table-box">
          <p className="p-table-heading">Hour</p>
          <p className="p-table">{element.hour}</p>
        </div>
        <div className="table-box">
          <p className="p-table-heading">Notes to courier</p>
          <p className="p-table">{element.message}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderTab;
