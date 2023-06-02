import React from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();
  return (
    <section className="logout">
      <h1>Wylogowanie nastąpiło pomyślnie!</h1>
      <img src="Decoration.svg" alt="decoration-svg" />
      <button onClick={() => navigate("/")}>Strona Główna</button>
    </section>
  );
}

export default Logout;
