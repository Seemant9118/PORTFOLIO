import React, { useState, useRef, useContext, useEffect } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w3tnffl",
        "template_1uf66yo",
        form.current,
        "Q0j9FGV3vexAgnlGP"
      )
      .then(
        (result) => {
          setDone(true);
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setDone(false);
      setError(false);
      form.current.reset();
    }, 3000);
  }, [done, error]);

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awsm">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button con-button" />
          <span>{done && "Thanks for Contacting !"}</span>
          <span>{error && "Something went wrong, Please try again later"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
