import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Organisations from "./components/Organisations";
import ProjectInfo from "./components/ProjectInfo";

function Homepage({user, setUser}) {
  return (
    <>
      <Hero user={user} setUser={setUser}/>
      <ProjectInfo />
      <AboutUs />
      <Organisations />
      <Contact />
    </>
  );
}

export default Homepage;
