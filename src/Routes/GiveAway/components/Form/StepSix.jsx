import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setOption,
  setBags,
  setLocation,
  setAdressee,
  setOrganisation,
  setCity,
  setPc,
  setMobile,
  setDate,
  setHour,
  setMessage,
  setStreet,
} from "../../../../app/features/form/formSlice";

function StepSix(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    resetFormState();
  }, []);

  const resetFormState = () => {
    dispatch(setOption([]));
    dispatch(setBags(0));
    dispatch(setLocation(""));
    dispatch(setAdressee(""));
    dispatch(setOrganisation(""));
    dispatch(setCity(""));
    dispatch(setPc(""));
    dispatch(setMessage(""));
    dispatch(setMobile(""));
    dispatch(setDate(""));
    dispatch(setHour(""));
    dispatch(setStreet(""));
    console.log("Form state reset");
  };

  return (
    <article className="success">
      <h2>
        Thank you for submitting the form. We will send any information about
        the collection of donated items by email.
      </h2>
      <img src="/Decoration.svg" alt="decoration-svg" />
    </article>
  );
}

export default StepSix;
