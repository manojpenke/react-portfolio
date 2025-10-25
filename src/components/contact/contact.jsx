import React from "react";
import "./contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail from "../../assets/mail_icon.svg";
import location from "../../assets/location_icon.svg";
import call from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "70ba18bb-3a9d-4402-b608-6f7e81b5aa56");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      alert("Error");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available, so feel free to send me a message about
            anything and you can contact me anytime.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="Mail Icon" />
              <p>manojpenke11@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call} alt="Call Icon" />
              <p>+91 9908428984</p>
            </div>

            <div className="contact-detail">
              <img src={location} alt="Location Icon" />
              <p>Kakinada, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="Email" />
          <label htmlFor="">Enter Your Text</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
