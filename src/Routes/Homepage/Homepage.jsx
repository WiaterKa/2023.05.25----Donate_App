import React from "react";
import AboutUs from "./components/AboutUs";
import Contact from "../universal_components/Contact";
import Hero from "./components/Hero";
import Organisations from "./components/Organisations/Organisations";
import ProjectInfo from "./components/ProjectInfo";

function Homepage() {
  return (
    <>
      <Hero />
      <ProjectInfo />
      <AboutUs />
      <Organisations />
      <Contact />
    </>
  );
}

export default Homepage;
