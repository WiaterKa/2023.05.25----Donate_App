import React from "react";
import { useNavigate } from "react-router-dom";

function Error(props) {
  const navigate = useNavigate();
  return (
    <section className="error">
      <h1>Ups... coś poszło nie tak</h1>
      <h2>Wróć do strony głównej</h2>
      <img src="Decoration.svg" alt="decoration-svg" />
      <button onClick={() => navigate("/")}>Strona Główna</button>
    </section>
  );
}

export default Error;
