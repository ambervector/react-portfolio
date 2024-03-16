import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.left_side}>
          <h3 className={classes.project_title}>{props.title}</h3>
          <Stack spacing={2} direction="row" className={classes.actions}>
            <a
              className={classes.btn}
              href={props.project_link}
              target="_blank"
              rel="noreferrer"
            >
              Demo Link
            </a>
            <Button variant="contained" color="error">
              <a
                className={classes.btn}
                href={props.github_link}
                target="_blank"
                rel="noreferrer"
              >
                Source Code
              </a>
            </Button>
          </Stack>
        </div>
        <div className={classes.right_side}>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
