import React from "react";

function Contact(props) {
  return (
    <section className="contact" id="contact">
      <div className="img-box"></div>
      <div className="txt-box">
        <h2>Skontaktuj się z nami</h2>
        <img src="Decoration.svg" alt="decoration-svg" />
        <form action="">
          <div className="upper-form">
            <div className="form-box">
              <label htmlFor="name">Wpisz swoje imię</label>
              <input type="text" />
            </div>
            <div className="form-box">
              <label htmlFor="email">Wpisz swój e-mail</label>
              <input type="text" />
            </div>
          </div>
          <div className="lower-form">
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea name="message" id="" cols="30" rows="5"></textarea>
          </div>
          <button>Wyślij</button>
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
