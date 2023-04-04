import React from "react";
import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSpring, animated } from "react-spring";

const iconStyle = { color: "red", fontSize: "4rem" };

const Footer = () => {
  const slideUp = useSpring({
    from: {
      transform: "translateY(100px)",

      opacity: 0,
    },
    to: {
      transform: "translateY(0px)",
      opacity: 1,
    },
    config: {
      duration: 1000,
    },
    delay: 500,
  });

  return (
    <>
      <animated.footer style={slideUp}>
        <div className={classes.icon_container}>
          <a href="#">
            <FacebookIcon className={classes.icon} style={iconStyle}>
              Facebook
            </FacebookIcon>
          </a>
          <a href="#">
            <LinkedInIcon className={classes.icon} style={iconStyle}>
              LinkedIn
            </LinkedInIcon>
          </a>

          <a href="#">
            <TwitterIcon className={classes.icon} style={iconStyle}>
              Twitter
            </TwitterIcon>
          </a>
          <a href="#">
            <GitHubIcon className={classes.icon} style={iconStyle}>
              GitHub
            </GitHubIcon>
          </a>
        </div>
      </animated.footer>
    </>
  );
};

export default Footer;
