import React from "react";
import { useState } from "react";
import StepFive from "./StepFive";
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

  //Step Four
  //form one
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [pc, setPc] = useState("");
  const [mobile, setMobile] = useState("");

  //form two
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="formGA">
      <div className="txt-container">
        {step < 5 && <p className="steps">Krok {step}/4</p>}

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
        {step === 4 && (
          <StepFour
            setStreet={setStreet}
            setCity={setCity}
            setPc={setPc}
            setMobile={setMobile}
            setDate={setDate}
            setHour={setHour}
            setMessage={setMessage}
          />
        )}

        {step === 5 && (
          <StepFive
            options={options}
            bags={bags}
            location={location}
            selectedOption={selectedOption}
            organisation={organisation}
            street={street}
            city={city}
            pc={pc}
            mobile={mobile}
            date={date}
            hour={hour}
            message={message}
          />
        )}

        <div className="btn-container">
          {step > 1 && (
            <button
              className="modifypage"
              onClick={() => setStep((prevStep) => prevStep - 1)}
            >
              Wstecz
            </button>
          )}

          {step < 5 && (
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
