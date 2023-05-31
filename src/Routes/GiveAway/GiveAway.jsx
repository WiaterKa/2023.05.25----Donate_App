import React from "react";
import HeroGA from "./components/HeroGA";

function GiveAway({ user, setUser }) {
  return (
    <>
      <HeroGA user={user} setUser={setUser} />
    </>
  );
}

export default GiveAway;
