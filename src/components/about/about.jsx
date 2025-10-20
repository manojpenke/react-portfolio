import React from "react";
import "./about.css";
import theme from "../../assets/theme_pattern.svg";
import profile from "../../assets/about_profile3.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme} alt="theme pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <div className="profile-wrapper">
            <div className="profile-glow"></div>
            <img src={profile} alt="profile" className="profile-image" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am Manoj, currently pursuing a diploma in Computer Engineering.
              I am passionate about becoming a software developer.
            </p>
            <p>
              I am eager to join a well-reputed company and enhance my technical
              and problem-solving skills.
            </p>
          </div>
          <div className="educations">
            <h1>Education</h1>
            <div className="education">
              <h2>Diploma in Computer Engineering</h2>
              <ul>
                <li>Aditya Polytechnic College</li>
                <li>Percentage: 95%</li>
              </ul>
            </div>
            <div className="education">
              <h2>Secondary School</h2>
              <ul>
                <li>Z.P.P. High School</li>
                <li>Marks: 515/600</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
