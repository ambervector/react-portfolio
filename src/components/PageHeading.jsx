import React from "react";
import classes from "./PageHeading.module.css";
import DownArrow from "./UI/DownArrow";

const PageHeading = (props) => {

  return (
    <>
      <h1 className={classes.container}>
        {props.heading}
      </h1>
      <DownArrow />
    </>
  );
};

export default PageHeading;
