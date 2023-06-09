import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../../../../app/features/form/formSlice";

function StepOne() {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.form.options);

  function handleChoice(e) {
    const selectedOption = e.target.nextSibling.innerText;

    if (options.includes(selectedOption)) {
      const updatedOptions = options.filter(
        (item) => item !== selectedOption
      );
      dispatch(setOption(updatedOptions));
    } else {
      const updatedOptions = [...options, selectedOption];
      dispatch(setOption(updatedOptions));
    }

  }

  return (
    <article className="step-one">
      <h2>Choose what you want to danate:</h2>

      <div className="options-container">
        <div className="option-box">
          <div
            className={
              options.includes("clothes that are reusable") ? "active" : ""
            }
            onClick={(e) => {
              handleChoice(e);
            }}
            data-color="checkbox"
          ></div>
          <p className="option">clothes that are reusable</p>
        </div>
        <div className="option-box">
          <div
            className={options.includes("discard clothes") ? "active" : ""}
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">discard clothes</p>
        </div>
        <div className="option-box">
          <div
            className={options.includes("books") ? "active" : ""}
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">books</p>
        </div>
        <div className="option-box">
          <div
            className={options.includes("other") ? "active" : ""}
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
