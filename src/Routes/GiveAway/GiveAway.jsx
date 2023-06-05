import React from "react";
import FormGA from "./components/Form/FormGA";
import HeroGA from "./components/HeroGA";
import { useNavigate } from "react-router-dom";

function GiveAway() {
  const navigate = useNavigate();
  if (localStorage.user) {
    return (
      <>
        <HeroGA />
        <FormGA />
      </>
    );
  } else {
    navigate("/error");
  }
}

export default GiveAway;
