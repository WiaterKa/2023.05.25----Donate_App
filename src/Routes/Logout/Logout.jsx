import React from "react";
import { useNavigate } from "react-router-dom";

function Logout(props) {
  const navigate = useNavigate();
  return (
    <section className="logout">
      <h1>You have successfully logged out!</h1>
      <img src="/Decoration.svg" alt="decoration-svg" />
      <button onClick={() => navigate("/")}>Home page</button>
    </section>
  );
}

export default Logout;
