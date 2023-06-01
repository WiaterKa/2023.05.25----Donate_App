import React from "react";
import { useState } from "react";
import StepOne from "./StepOne";

import StepTwo from "./StepTwo";

function FormGA(props) {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState([]);
  const [bags, setBags] = useState(0);

  return (
    <section className="formGA">
      <div className="txt-container">
        <p className="steps">Krok {step}/4</p>

        {step === 1 && <StepOne setOptions={setOptions} />}
        {step === 2 && <StepTwo setBags={setBags} />}

        <div className="btn-container">
          {step > 1 && (
            <button
              className="modifypage"
              onClick={() => setStep((prevStep) => prevStep - 1)}
            >
              Wstecz
            </button>
          )}

          {step < 4 && (
            <button
              className="modifypage"
              onClick={() => setStep((prevStep) => prevStep + 1)}
            >
              Dalej
            </button>
          )}
        </div>
      </div>
      <div className="img-container"> </div>
    </section>
  );
}

export default FormGA;
