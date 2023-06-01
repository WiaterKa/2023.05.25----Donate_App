import React from "react";
import { useState } from "react";
import StepOne from "./StepOne";
import { Route, Routes } from "react-router-dom";

function FormGA(props) {
  const [step, setStep] = useState(1);

  return (
    <section className="formGA">
      <div className="txt-container">
        <p className="steps">Krok {step}/4</p>

        {step === 1 && <StepOne />}
        {step === 2 && <p>JEBAĆ PIS</p>}
        <button
          className="nextpage"
          onClick={() => setStep((prevStep) => prevStep + 1)}
        >
          Dalej
        </button>
      </div>
      <div className="img-container"> </div>
    </section>
  );
}

export default FormGA;
