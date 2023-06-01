import React from "react";
import { useState } from "react";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

function FormGA(props) {
  const [step, setStep] = useState(1);
  const [options, setOptions] = useState([]);
  const [bags, setBags] = useState(0);
  const [location, setLocation] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [organisation, setOrganisation] = useState("");

  return (
    <section className="formGA">
      <div className="txt-container">
        <p className="steps">Krok {step}/4</p>

        {step === 1 && <StepOne setOptions={setOptions} />}
        {step === 2 && <StepTwo setBags={setBags} />}
        {step === 3 && (
          <StepThree
            setLocation={setLocation}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            setOrganisation={setOrganisation}
          />
        )}
        {step === 4 && <StepFour />}

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
