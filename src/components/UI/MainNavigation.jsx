import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import "./MainNavigation.module.css";
import { useSpring, animated } from "react-spring";

const MainNavigation = () => {
  // const logoLoaderHandler = () => {
  //   console.log("working!");
  // };

  const scaleChange = useSpring({
    from: { opacity: "0", marginTop: "-200px" },
    to: { opacity: "1", marginTop: "0px" },
    config: { duration: 1500 },
  });

  return (
    <>
      <animated.header style={scaleChange}>
        <div className={classes.logo}>
          <Link to="/">
            <span id="logo"> Amber. </span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </animated.header>
    </>
  );
};

export default MainNavigation;
