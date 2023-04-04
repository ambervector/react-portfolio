import React from "react";
import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.left_side}>
          <h3 className={classes.project_title}>{props.title}</h3>
          <div className={classes.actions}>
            <a className={classes.btn} href={props.project_link} target="_blank" rel="noreferrer">
              Demo Link
            </a>

            <a className={classes.btn} href={props.github_link} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>
        </div>
        <div className={classes.right_side}>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
