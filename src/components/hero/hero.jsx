import React, { useState } from "react";
import Profile from "../../assets/about.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resumephoto.png";
import "./hero.css";
const hero = () => {
  const openimage = () => {
    window.open(resume, "_blank");
  };
  return (
    <div id="home" className="hero">
      <div className="adjtext">
        <h1>HELLO, I am Manoj </h1>
        <p>
          computer engineering student passionate to become a software developer
          and enhance techinical skill.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <button onClick={openimage}>My Resume</button>
          </div>
        </div>
      </div>
      <div className="adjimg">
        <img src={Profile} className="img" />
      </div>
    </div>
  );
};
export default hero;
