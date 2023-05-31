import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Contact(props) {
  const [successMsg, setSuccessMsg] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setSuccessMsg("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
        // Wyświetl odpowiedź z serwera
        reset(); // Wyczyść formularz po pomyślnym wysłaniu
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="img-box"></div>
      <div className="txt-box">
        <h2>Skontaktuj się z nami</h2>
        <img src="Decoration.svg" alt="decoration-svg" />
        <p className="success-msg"> {successMsg}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="upper-form">
            <div className="form-box">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input
                {...register("name", {
                  required: "To pole jest wymagane",
                  pattern: {
                    value: /^\w+$/,
                    message: "Podane imię jest nieprawidłowe!",
                  },
                })}
                className={errors.name ? "error-input" : ""}
              />
              <p className="error-msg">{errors.name?.message}</p>
            </div>

            <div className="form-box">
              <label htmlFor="email">Wpisz swój e-mail</label>
              <input
                {...register("email", {
                  required: "To pole jest wymagane",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Podany e-mail jest nieprawidłowy!",
                  },
                })}
                className={errors.email ? "error-input" : ""}
              />
              <p className="error-msg">{errors.email?.message}</p>
            </div>
          </div>
          <div className="lower-form">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              id="message"
              cols="30"
              rows="5"
              {...register("message", {
                required: "To pole jest wymagane",
                minLength: {
                  value: 120,
                  message: "Wiadomość musi mieć co najmniej 120 znaków!",
                },
              })}
              className={errors.message ? "error-input" : ""}
            ></textarea>
            <p className="error-msg">{errors.message?.message}</p>
          </div>
          <input className="submit-btn" type="submit" />
        </form>
        <div className="social-box">
          <a href="/">
            <img src="Facebook.svg" alt="facebook" />
          </a>
          <a href="/">
            <img src="Instagram.svg" alt="facebook" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
