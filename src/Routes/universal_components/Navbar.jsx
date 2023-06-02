import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  return (
    <nav>
      {localStorage.user === undefined ? (
        <div className="nav-login">
          <button
            className="login"
            onClick={() => console.log(auth.currentUser.email)}
          >
            <NavLink to="/login">Zaloguj się</NavLink>
          </button>
          <button className="register">
            <NavLink to="/register">Załóz konto</NavLink>
          </button>
        </div>
      ) : (
        <div className="nav-login">
          <p className="user">{`Cześć ${localStorage.user} !`}</p>
          <button className="login" onClick={() => console.log(auth)}>
            <NavLink to="/giveaway">Oddaj rzeczy</NavLink>
          </button>
          <button
            className="register"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  console.log(
                    localStorage,
                    localStorage.token,
                    localStorage.email
                  );
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            <NavLink to="/logout">Wyloguj</NavLink>
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
  );
}

export default Navbar;
