import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";

function Hero({ user, setUser }) {
  return (
    <section className="hero" id="hero">
      <nav>
        {user === "" ? (
          <div className="nav-login">
            <button className="login">
              <NavLink to="/login">Zaloguj się</NavLink>
            </button>
            <button className="register">
              <NavLink to="/register">Załóz konto</NavLink>
            </button>
          </div>
        ) : (
          <div className="nav-login">
            <p className="user">{`Cześć ${user} !`}</p>
            <button className="login" onClick={() => console.log(auth)}>
              <NavLink to="/login">Oddaj rzeczy</NavLink>
            </button>
            <button
              className="register"
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    setUser("");
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            >
              <NavLink to="/register">Wyloguj</NavLink>
            </button>
          </div>
        )}

        <div className="nav-homepage">
          <Link to="hero" smooth={true} duration={1000}>
            Start
          </Link>
          <Link to="project-info" smooth={true} duration={12000}>
            O co chodzi?
          </Link>
          <Link to="about_us" smooth={true} duration={1000}>
            O nas
          </Link>
          <Link to="organisations" smooth={true} duration={1000}>
            Fundacja i organizacje
          </Link>
          <Link to="contact" smooth={true} duration={1000}>
            Kontakt
          </Link>
        </div>
      </nav>

      <div className="hero-main-container">
        <div className="hero-img-container"></div>
        <div className="hero-txt-container">
          <h1 className="h1-hero">
            Zacznij pomagać! <br />
            Oddaj niechciane rzeczy w zaufane ręce <br />
            <img src="Decoration.svg" alt="decoration-svg" />
          </h1>
          <div className="btn-container">
            <button className="hero">ODDAJ RZECZY</button>
            <button className="hero">ZORGANIZUJ ZBIÓRKĘ</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
