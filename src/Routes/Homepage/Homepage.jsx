import React from "react";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Organisations from "./components/Organisations";
import ProjectInfo from "./components/ProjectInfo";

function Homepage(props) {
  return (
    <>
      <Hero />
      <ProjectInfo />
      <AboutUs />
      <Organisations />
    </>
  );
}

export default Homepage;
