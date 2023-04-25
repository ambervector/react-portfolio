import React from "react";
import classes from "./ReactProjects.module.css";
import ProjectItem from "./ProjectItem";

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
    title: "Log In App",
    project_link: "https://react-login-page-project.netlify.app/",
    github_link: "https://github.com/ambervector/react-login-practice",
    description:
      "This project uses the core react concepts like components, props, useState Hook, useEffect Hook, custom Card component, module.css to scope the css, props, local storage for log in session for authentication, event handling, etc.",
  },

  {
    id: 4,
    title: "Form Validation App",
    project_link: "react-complex-form.web.app",
    github_link: "https://github.com/ambervector/react-complex-form-validation",
    description:
      "This React JS project uses the core react concepts like useReducer Hook, Custom Input Hook, reusable components, useState Hook, different event handling functions, etc. The app uses name, last name and email validity logic inside the custom input hook.",
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
  return (
    <>
      <div className={classes.container}>
        <h2>ReactJs Projects</h2>
        {reactProjects.map((project) => (
          <ProjectItem
            key={Math.random()}
            title={project.title}
            description={project.description}
            project_link={project.project_link}
            github_link={project.github_link}
          />
        ))}
      </div>
    </>
  );
};

export default ReactProjects;
export { reactProjects };
