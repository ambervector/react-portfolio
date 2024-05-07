import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Grid";
import Grid from "@mui/material/Box";

import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  return (
    <>
      <Grid container className={classes.card}>
        <Grid item xs={12} className={classes.left_side}>
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
            <a
              className={classes.btn}
              href={props.github_link}
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
          </Stack>
        </Grid>
        <Grid item xs={12} className={classes.right_side}>
          <p>{props.description}</p>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectItem;
