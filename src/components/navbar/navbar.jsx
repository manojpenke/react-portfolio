import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import line from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div id="nav" className="navbar">
      <img src={logo} alt="logo" />

      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={line} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={line} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skill">
            <p onClick={() => setMenu("skill")}>Skills</p>
          </AnchorLink>
          {menu === "skill" ? <img src={line} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={line} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#footer">
          Subscribe
        </AnchorLink>
      </div>
    </div>
  );
};
export default Navbar;
