import React from "react";
import classes from "./ReactProjects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { Box } from "@mui/material";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const reactProjects = [
  {
    id: 1,
    title: "Millionaire Quiz App",
    project_link: "https://reactjs-millionaire-quiz-app.netlify.app/",
    github_link: "https://github.com/ambervector/react-millionaire-game-app",
    description:
      "This is a millionaire quiz app that lets the user start the game after entering the name. User gets to answer the onscreen questions. The user either wins or loses the game and gets to earn some winning prize after completing the game. This simple react app is created using useState, useEffect, useContext, components, form, custom components. It also uses the concepts of event handlers, props, custom events, etc.",
  },
  {
    id: 2,
    title: "Food Ordering App",
    project_link: "https://reactjs-food-ordering-app.netlify.app/",
    github_link: "https://github.com/ambervector/reactjs-food-ordering-app",
    description:
      "This food ordering react app is created using useState, useEffect, useContext, components, form, custom components. It also uses the concepts of portals, refs, props, custom events, etc.",
  },

  {
    id: 3,
    title: "React MUI Social Demo",
    project_link: "https://react-mui-social-mu.vercel.app/",
    github_link: "https://github.com/ambervector/react-mui-social",
    description:
      "This project uses the core React MUI components, props, useState Hook, useEffect Hook, custom Card component, module.css to scope the css, props. The app uses different MUI components like Appbar, Paper, Box, Cards, Typography, etc",
  },

  {
    id: 4,
    title: "Form Validation App",
    project_link: "https://react-personal-info.vercel.app/",
    github_link: "https://github.com/ambervector/react-personal-info",
    description:
      "This React JS project uses Material UI core react concepts and customizations. It also uses different animation techniques, multi step component and form validation logics. It also uses the useReducer Hook, Custom Input Hook, reusable components, useState Hook, different event handling functions, etc.",
  },

  {
    id: 5,
    title: "TODO List App",
    project_link: "https://reactjs-todo-project-app.netlify.app/",
    github_link: "https://github.com/ambervector/react-todo-app",
    description:
      "This React JS project uses the core react concepts like components, useState Hook, custom Card component, Dynamic List manipulation, props, props.children, event handling, etc.",
  },
];

const ReactProjects = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const refEl = gsap.utils.toArray(scrollRef.current.children);
    refEl.forEach((refs) => {
      gsap.fromTo(
        refs,
        {
          opacity: 0,
          x: 100,
          y: 100,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scrollTrigger: {
            trigger: refs,
            start: "top bottom",
            end: "top 30%",
            scrub: true,
            ease: "power1.inOut",
          },
        }
      );
    });
  }, []);
  return (
    <>
      <div className={classes.container}>
        <h2>ReactJs Projects</h2>
        <Box className={classes.projectContainer} ref={scrollRef}>
          {reactProjects.map((project) => (
            <ProjectItem
              key={Math.random()}
              title={project.title}
              description={project.description}
              project_link={project.project_link}
              github_link={project.github_link}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default ReactProjects;
export { reactProjects };
