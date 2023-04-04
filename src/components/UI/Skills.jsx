import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNode,
  FaNodeJs,
} from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import classes from "./Skills.module.css";

// import AiFillHtml5 from "react-icons";
const skillsStyle = { color: "red", fontSize: "4rem" };

const Skills = () => {
  return (
    <>
      <div className={classes.skills_container}>
        <h2>Full Stack Developer</h2>

        <div className="skills_icons_container">
          <div className={classes.skill_icon}>
            <FaHtml5 style={skillsStyle} />
            <span>HTML, HTML5</span>
          </div>

          <div className={classes.skill_icon}>
            <FaBootstrap style={skillsStyle} />
            <span>Bootstrap</span>
          </div>

          <div className={classes.skill_icon}>
            <FaReact style={skillsStyle} />
            <span>ReactJS</span>
          </div>

          <div className={classes.skill_icon}>
            <FaJsSquare style={skillsStyle} />
            <span>JavaScript, Modern JS, ES6</span>
          </div>

          <div className={classes.skill_icon}>
            <FaCss3Alt style={skillsStyle} />
            <span>CSS, CSS3</span>
          </div>

          <div className={classes.skill_icon}>
            <IoLogoGithub style={skillsStyle} />
            <span>Git, GitHub</span>
          </div>

          <div className={classes.skill_icon}>
            <FaNode style={skillsStyle} />
            <span>NodeJS</span>
          </div>

          <div className={classes.skill_icon}>
            <FaNodeJs style={skillsStyle} />
            <span>ExpressJS</span>
          </div>

          <div className={classes.skill_icon}>
            <SiMongodb style={skillsStyle} />
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
