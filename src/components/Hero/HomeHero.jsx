import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HomeHero.module.css";
import profilePicture from "../../images/FB_IMG_1572607249818.jpg";
import { useSpring, animated } from "react-spring";

const HomeHero = () => {
  const [aboutText, setAboutText] = useState("Hi,");
  const [workText, setWorkText] = useState("I am");
  const [contactText, setContactText] = useState("Amber.");

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

  const mouseOverHandler = (event) => {
    if (event.target.textContent === "Hi,") {
      setAboutText("About Me");
    } else if (event.target.textContent === "I am") {
      setWorkText("My Projects");
    } else {
      setContactText("Contact");
    }
  };

  const mouseLeaveHandler = (event) => {
    setAboutText("Hi,");
    setWorkText("I am");
    setContactText("Amber.");
  };

  return (
    <>
      <main className={classes.hero}>
        <animated.div className={classes.hero__left}>
          <div className={classes.left_container}>
            <div className={classes.link_items}>
              <animated.div style={scaleChange} className={classes.link_item}>
                <Link
                  to="/about"
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {aboutText}
                </Link>
              </animated.div>
              <animated.div style={slideFromLeft} className={classes.link_item}>
                <Link
                  to="/projects"
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {workText}
                </Link>
              </animated.div>
              <animated.div style={scaleChange} className={classes.link_item}>
                <Link
                  to="/contact"
                  onMouseOver={mouseOverHandler}
                  onMouseLeave={mouseLeaveHandler}
                >
                  {contactText}
                </Link>
              </animated.div>
            </div>
          </div>
        </animated.div>

        <animated.div style={scaleChange} className={classes.hero__right}>
          <div className={classes.right_container}></div>
        </animated.div>
      </main>
    </>
  );
};

export default HomeHero;
