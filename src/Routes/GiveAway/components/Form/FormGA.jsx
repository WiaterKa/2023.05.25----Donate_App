import React from "react";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  setStepDec,
  setStepInc,
  setStepRed,
} from "../../../../app/features/form/formSlice";
import { useEffect } from "react";

function FormGA(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setStepRed());
  }, []);

  const step = useSelector((state) => state.form.step);
  const options = useSelector((state) => state.form.options);
  const bags = useSelector((state) => state.form.bags);
  const location = useSelector((state) => state.form.location);
  const adressee = useSelector((state) => state.form.adressee);
  const street = useSelector((state) => state.form.street);
  const city = useSelector((state) => state.form.city);
  const pc = useSelector((state) => state.form.pc);
  const mobile = useSelector((state) => state.form.mobile);
  const date = useSelector((state) => state.form.date);
  const hour = useSelector((state) => state.form.hour);
  const message = useSelector((state) => state.form.message);

  const onSubmitOrder = async () => {
    const orderCollection = collection(db, "Orders");
    await addDoc(orderCollection, {
      dateOrder: new Date(),
      user: localStorage.user,
      bags: bags,
      city: city,
      date: date,
      hour: hour,
      location: location,
      message: message,
      mobile: mobile,
      options: options,
      pc: pc,
      selectedOption: adressee,
      street: street,
    });
  };

  return (
    <section className="formGA">
      <div className="txt-container">
        {step < 5 && <p className="steps">Step {step}/4</p>}

        {step === 1 && <StepOne />}
        {step === 2 && <StepTwo />}
        {step === 3 && <StepThree />}
        {step === 4 && <StepFour />}
        {step === 5 && <StepFive />}
        {step === 6 && <StepSix />}

        <div className="btn-container">
          {step > 1 && step < 6 && (
            <button
              className="modifypage"
              onClick={() => dispatch(setStepDec())}
            >
              Back
            </button>
          )}

          {step < 5 && (
            <button
              className="modifypage"
              onClick={() => dispatch(setStepInc())}
            >
              Next
            </button>
          )}

          {step === 5 && (
            <button
              className="modifypage"
              onClick={() => {
                onSubmitOrder();
                dispatch(setStepInc());
              }}
            >
              Confirm
            </button>
          )}
        </div>
      </div>
      <div className="img-container"> </div>
    </section>
  );
}

export default FormGA;
