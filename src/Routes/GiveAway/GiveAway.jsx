import React from "react";
import Contact from "../universal_components/Contact";
import FormGA from "./components/Form/FormGA";
import HeroGA from "./components/HeroGA";

function GiveAway({ user, setUser }) {
  return (
    <>
      <HeroGA user={user} setUser={setUser} />
      <FormGA />
      <Contact />
    </>
  );
}

export default GiveAway;
