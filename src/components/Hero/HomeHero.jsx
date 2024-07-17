import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import classes from "./HomeHero.module.css";
import { useSpring, animated } from "react-spring";
import { Typography } from "@mui/material";

const HomeHero = () => {
  const [textToggleState, setTextToggleState] = useState(false);

  //ANIMATION FOR SCALE CHANGE
  const scaleChange = useSpring({
    from: { transform: "scale(2)", opacity: "0" },
    to: { transform: "scale(1)", opacity: "1" },
    config: {
      duration: 1000,
    },
    delay: 500,
  });

  //ANIMATION FOR SLIDE FROM LEFT
  const slideFromLeft = useSpring({
    from: {
      opacity: "0",
      marginLeft: "-200px",
    },
    to: { opacity: "1", marginLeft: "0px" },
    config: {
      duration: 1000,
    },
    delay: 500,
  });

  const mouseOverHandler = () => {
    setTextToggleState((prevState) => !prevState);
  };

  const mouseLeaveHandler = () => {
    setTextToggleState((prevState) => !prevState);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={classes.hero}
      backgroundColor={"background.default"}
      color={"text.secondary"}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} sx={{ paddingTop: { xs: "10rem" } }}>
          <animated.div>
            <div className={classes.link_items}>
              <animated.div style={scaleChange} className={classes.link_item}>
                <Link
                  to="/about"
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {textToggleState ? `About Me` : `Hi,`}
                </Link>
              </animated.div>
              <animated.div style={slideFromLeft} className={classes.link_item}>
                <Link
                  to="/projects"
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {textToggleState ? `My Projects` : `I am`}
                </Link>
              </animated.div>
              <animated.div style={scaleChange} className={classes.link_item}>
                <Link
                  to="/contact"
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {textToggleState ? `Contact` : `Amber.`}
                </Link>
              </animated.div>
            </div>
          </animated.div>
        </Grid>
        <Grid item xs={12} md={6}>
          <animated.div style={scaleChange}>
            <div className={classes.right_container}></div>
          </animated.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeHero;
