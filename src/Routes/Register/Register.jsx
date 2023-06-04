import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });

  return (
    <section className="login">
      <div className="wrapper">
        <div className="box-heading">
          <h1>Załóz konto</h1>
          <img src="Decoration.svg" alt="decoration-svg" />
        </div>
        <form
          onSubmit={handleSubmit(async () => {
            if (password === passwordCheck && password !== "") {
              await registerUser();
              const token = await auth.currentUser.getIdToken();
              localStorage.setItem("token", token);
              localStorage.setItem("user", auth.currentUser.email);
              navigate("/");
            }
          })}
        >
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: "To pole jest wymagane",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Podany e-mail jest nieprawidłowy!",
                },
              })}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-msg">{errors.email?.message}</p>
            <label className="password" htmlFor="password">
              Hasło
            </label>
            <input
              {...register("password", {
                required: "To pole jest wymagane",
                minLength: {
                  value: 6,
                  message: "Hasło musi mieć co najmniej 6 znaków!",
                },
              })}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-msg">{errors.password?.message}</p>
            <label className="password" htmlFor="passwordTwo">
              Powtórz hasło
            </label>
            <input
              {...register("passwordTwo", {
                required: "To pole jest wymagane",
                validate: (value) =>
                  value === password || "Podaj prawidłowo drugi raz hasło!",
              })}
              type="password"
              onChange={(e) => setPasswordCheck(e.target.value)}
            />
            <p className="error-msg">{errors.passwordTwo?.message}</p>
          </div>
          <div className="box-buttons">
            <button className="login">
              <NavLink to="/login">Zaloguj się </NavLink>
            </button>
            <button className="register" type="submit">
              Załóz konto
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
