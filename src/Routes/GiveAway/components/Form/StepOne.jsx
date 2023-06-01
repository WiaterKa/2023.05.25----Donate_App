import React from "react";
import { useState } from "react";

function StepOne(props) {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);
  const [isChecked4, setChecked4] = useState(false);


  const handleToggle1 = () => {
    setChecked1(!isChecked1);
  };

  const handleToggle2 = () => {
    setChecked2(!isChecked2);
  };

  const handleToggle3 = () => {
    setChecked3(!isChecked3);
  };

  const handleToggle4 = () => {
    setChecked4(!isChecked4);
  };

  function handleChoice(e) {
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
              handleToggle1();
              handleChoice(e);
            }}
            className="checkbox 1"
            data-color={isChecked1 ? "active" : ""}
          ></div>
          <p className="option">
            ubrania, które nadają się do ponownego użycia
          </p>
        </div>
        <div className="option-box">
          <div
            data-color={isChecked2 ? "active" : ""}
            onClick={(e) => {
              handleToggle2();
              handleChoice(e);
            }}
            className="checkbox 2"
          ></div>
          <p className="option">ubrania do wyrzucenia</p>
        </div>
        <div className="option-box">
          <div
            data-color={isChecked3 ? "active" : ""}
            onClick={(e) => {
              handleToggle3();
              handleChoice(e);
            }}
            className="checkbox 3"
          ></div>
          <p className="option">ksiązki</p>
        </div>
        <div className="option-box">
          <div
            onClick={(e) => {
              handleToggle4();
              handleChoice(e);
            }}
            className="checkbox 4"
            data-color={isChecked4 ? "active" : ""}
          ></div>
          <p className="option">inne</p>
        </div>
      </div>


    </article>
  );
}

export default StepOne;
