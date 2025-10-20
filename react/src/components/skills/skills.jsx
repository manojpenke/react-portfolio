import React from "react";
import "./skills.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import skill_data from "../../assets/skill_data";

const Skills = () => {
  return (
    <div id="skill" className="skills">
      <div className="skills-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="skills-container">
        {skill_data.map((skill, index) => (
          <div className="aboutskill" key={index}>
            <img src={skill.s_img} alt={skill.s_name} />
            <p>{skill.s_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
