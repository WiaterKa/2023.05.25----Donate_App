import React from "react";
import { auth } from "../../config/firebase";
import {
  fetchSignInMethodsForEmail,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const signIn = async (data) => {
    try {
      const { email, password } = data;
      const auth = getAuth();
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        // Użytkownik istnieje w bazie danych Firebase, można go zalogować
        await signInWithEmailAndPassword(auth, email, password);
        setUser(auth.currentUser.email);
        navigate("/");
      } else {
        setErrorMsg("Podano błędne dane. Spróbuj ponownie");
      }
    } catch (error) {
      console.log("Wystąpił błąd podczas logowania:", error);
      setErrorMsg("Podano błędne dane. Spróbuj ponownie");
    }
  };

  return (
    <section className="login">
      <div className="wrapper">
        <div className="box-heading">
          <h1>Zaloguj się</h1>
          <img src="Decoration.svg" alt="decoration-svg" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
            setUser(auth.currentUser.email);
            navigate("/");
          }}
        >
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <p className="error-msg">{errorMsg}</p>
            <label className="password" htmlFor="password">
              Hasło
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-msg">{errorMsg}</p>
          </div>

          <div className="box-buttons">
            <button className="register">
              {" "}
              <NavLink to="/register">Załóz konto </NavLink>
            </button>
            <button className="login" type="submit">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;