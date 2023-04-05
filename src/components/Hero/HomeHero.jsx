import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./HomeHero.module.css";
import { useSpring, animated } from "react-spring";

// const initialTextToggleState = {
//   aboutToggle: false,
//   workToggle: false,
//   contactToggle: false,
// };

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
