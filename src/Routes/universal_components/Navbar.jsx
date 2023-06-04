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
            <NavLink to="/login">Log in</NavLink>
          </button>
          <button className="register">
            <NavLink to="/register">Register</NavLink>
          </button>
        </div>
      ) : (
        <div className="nav-login">
          <p className="user">{`Hello ${localStorage.user} !`}</p>
          <button className="login" onClick={() => console.log(auth)}>
            <NavLink to="/giveaway">Donate</NavLink>
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
            <NavLink to="/logout">Log out</NavLink>
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
