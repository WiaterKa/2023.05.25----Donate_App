import React from "react";
import { useState } from "react";

function StepTwo(props) {


  return (
    <article className="step-two">
      <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
      <div className="select-box">
        <label for="bags">Liczba 60L worków:</label>

        <select
          name="bags"
          id="bags"
          onChange={(e) => {
            setBags(e.target.value);
            console.log(bags);
          }}
        >
          <option value="0">-- wybierz --</option>
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
