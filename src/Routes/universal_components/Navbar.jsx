import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";

function Navbar() {
  return (
    <>
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
    </>
  );
}

export default Navbar;
