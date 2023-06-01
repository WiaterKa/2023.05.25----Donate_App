import React from "react";
import { useState } from "react";

function StepOne(props) {

  function handleChoice(e) {
    e.currentTarget.classList.toggle("active");
    const selectedOption = e.target.nextSibling.innerText;
    setOptions((prevOptions) => {
      if (prevOptions.includes(selectedOption)) {
        return prevOptions.filter((item) => item !== selectedOption);
      } else {
        return [...prevOptions, selectedOption];
      }
    });
  }

  return (
    <article className="step-one">
      <h2>Zaznacz, co chcesz oddać:</h2>

      <div className="options-container">
        <div className="option-box">
          <div
            onClick={(e) => {
              handleChoice(e);
            }}
            data-color="checkbox"
          ></div>
          <p className="option">
            ubrania, które nadają się do ponownego użycia
          </p>
        </div>
        <div className="option-box">
          <div
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">ubrania do wyrzucenia</p>
        </div>
        <div className="option-box">
          <div
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">ksiązki</p>
        </div>
        <div className="option-box">
          <div
            onClick={(e) => {
              handleChoice(e);
            }}
            data-color="checkbox"
          ></div>
          <p className="option">inne</p>
        </div>
      </div>
    </article>
  );
}

export default StepOne;
