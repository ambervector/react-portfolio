import React from "react";
import PageHeading from "../components/PageHeading";
import classes from "./Projects.module.css";
import ReactProjects from "../components/ReactProjects";
import HtmlProjects from "../components/HtmlProjects";
import Footer from "../components/UI/Footer";

const Projects = () => {
  const projectsHeading = "A quick glance at my Projects?";
  return (
    <>
      <div className={classes.container}>
        <PageHeading heading={projectsHeading} />
        <ReactProjects />
        <HtmlProjects />
        <Footer />
      </div>
    </>
  );
};

export default Projects;
