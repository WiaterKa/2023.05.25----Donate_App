import React from "react";

function StepOne({ setOptions }) {
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
      <h2>Choose what you want to danate:</h2>

      <div className="options-container">
        <div className="option-box">
          <div
            onClick={(e) => {
              handleChoice(e);
            }}
            data-color="checkbox"
          ></div>
          <p className="option">clothes that are reusable</p>
        </div>
        <div className="option-box">
          <div
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">discard clothes</p>
        </div>
        <div className="option-box">
          <div
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">books</p>
        </div>
        <div className="option-box">
          <div
            onClick={(e) => {
              handleChoice(e);
            }}
            data-color="checkbox"
          ></div>
          <p className="option">other</p>
        </div>
      </div>
    </article>
  );
}

export default StepOne;
