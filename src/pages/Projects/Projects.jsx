import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import classes from "./Projects.module.css";
import ReactProjects from "../../components/ReactProjects/ReactProjects";
import HtmlProjects from "../../components/HtmlProject/HtmlProjects";

const Projects = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });
  const projectsHeading = "A quick glance at my Projects?";
  return (
    <>
      <div className={classes.container}>
        <PageHeading heading={projectsHeading} />
        <ReactProjects />
        <HtmlProjects />
      </div>
    </>
  );
};

export default Projects;
