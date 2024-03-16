import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import classes from "./Projects.module.css";
import ReactProjects from "../../components/ReactProjects/ReactProjects";
import HtmlProjects from "../../components/HtmlProject/HtmlProjects";

const Projects = () => {
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
