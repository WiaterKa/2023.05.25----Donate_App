import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBags } from "../../../../app/features/form/formSlice";

function StepTwo() {
  const dispatch = useDispatch();
  const bags = useSelector((state) => state.form.bags);

  return (
    <article className="step-two">
      <h2>Enter the number of 60l bags in which you packed your items:</h2>
      <div className="select-box">
        <label for="bags">Number of 60L bags:</label>

        <select
          value={bags}
          name="bags"
          id="bags"
          onChange={(e) => {
            dispatch(setBags(e.target.value));
          }}
        >
          <option value="0">-- choose --</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </article>
  );
}

export default StepTwo;
