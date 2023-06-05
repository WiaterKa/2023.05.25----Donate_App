import React from "react";
import Contact from "../universal_components/Contact";
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
        <Contact />
      </>
    );
  } else {
    navigate("/error");
  }
}

export default GiveAway;
