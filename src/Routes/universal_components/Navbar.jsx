import React from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  setOption,
  setBags,
  setLocation,
  setAdressee,
  setOrganisation,
  setCity,
  setPc,
  setMobile,
  setDate,
  setHour,
  setMessage,
  setStreet,
} from "../../app/features/form/formSlice";

function Navbar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        resetFormState();
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const resetFormState = () => {
    dispatch(setOption([]));
    dispatch(setBags(0));
    dispatch(setLocation(""));
    dispatch(setAdressee(""));
    dispatch(setOrganisation(""));
    dispatch(setCity(""));
    dispatch(setPc(""));
    dispatch(setMessage(""));
    dispatch(setMobile(""));
    dispatch(setDate(""));
    dispatch(setHour(""));
    dispatch(setStreet(""));
    console.log("Form state reset");
  };

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
          <button className="register" onClick={handleLogout}>
            <NavLink to="/logout">Log out</NavLink>
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;
