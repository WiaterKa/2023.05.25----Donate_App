import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOption } from "../../../../app/features/form/formSlice";

function StepOne() {
  const dispatch = useDispatch();
  const prevOptions = useSelector((state) => state.form.options);

  function handleChoice(e) {
    // e.currentTarget.classList.toggle("active");
    const selectedOption = e.target.nextSibling.innerText;

    if (prevOptions.includes(selectedOption)) {
      const updatedOptions = prevOptions.filter(
        (item) => item !== selectedOption
      );
      dispatch(setOption(updatedOptions));
      console.log("buka");
    } else {
      const updatedOptions = [...prevOptions, selectedOption];
      dispatch(setOption(updatedOptions));
      console.log("ipdate");
    }
    console.log(prevOptions);
  }

  return (
    <article className="step-one">
      <h2>Choose what you want to danate:</h2>

      <div className="options-container">
        <div className="option-box">
          <div
            className={
              prevOptions.includes("clothes that are reusable") ? "active" : ""
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
            className={prevOptions.includes("discard clothes") ? "active" : ""}
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">discard clothes</p>
        </div>
        <div className="option-box">
          <div
            className={prevOptions.includes("books") ? "active" : ""}
            data-color="checkbox"
            onClick={(e) => {
              handleChoice(e);
            }}
          ></div>
          <p className="option">books</p>
        </div>
        <div className="option-box">
          <div
            className={prevOptions.includes("other") ? "active" : ""}
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
