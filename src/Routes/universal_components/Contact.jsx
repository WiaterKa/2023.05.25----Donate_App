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
        <h2>Contact us</h2>
        <img src="Decoration.svg" alt="decoration-svg" />
        <p className="success-msg"> {successMsg}</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="upper-form">
            <div className="form-box">
              <label htmlFor="name">Enter your name</label>
              <input
                {...register("name", {
                  required: "This filed is required",
                  pattern: {
                    value: /^\w+$/,
                    message: "The given name is incorrect!",
                  },
                })}
                className={errors.name ? "error-input" : ""}
              />
              <p className="error-msg">{errors.name?.message}</p>
            </div>

            <div className="form-box">
              <label htmlFor="email">Enter your e-mail</label>
              <input
                {...register("email", {
                  required: "This filed is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "The given email is incorrect!",
                  },
                })}
                className={errors.email ? "error-input" : ""}
              />
              <p className="error-msg">{errors.email?.message}</p>
            </div>
          </div>
          <div className="lower-form">
            <label htmlFor="message">Type your message</label>
            <textarea
              id="message"
              cols="30"
              rows="5"
              {...register("message", {
                required: "This filed is required",
                minLength: {
                  value: 120,
                  message: "The message must be at least 120 characters!",
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
