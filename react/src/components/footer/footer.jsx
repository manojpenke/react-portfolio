import React, { useState } from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      alert("Please enter your email.");
    } else if (!emailRegex.test(email)) {
      alert("Please enter a valid email format.");
    } else {
      alert(`Thanks for subscribing, ${email}!`);
      setEmail("");
    }
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>Thanks for visiting my profile.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="footer-subscribe" onClick={handleSubscribe}>
            subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          @ 2025 Manoj Penke. All rights reserved
        </p>
        <div className="footer-bottom-right">
          <p>Terms of services </p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
