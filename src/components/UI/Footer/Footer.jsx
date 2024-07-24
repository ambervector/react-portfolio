import React from "react";
import classes from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSpring, animated } from "react-spring";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const iconStyle = { color: "red", fontSize: "4rem" };

const Footer = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#footer",
      {
        opacity: 0,
        scale: 2,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
      }
    );
  }, []);

  // const slideUp = useSpring({
  //   from: {
  //     transform: "translateY(100px)",
  //     opacity: 0,
  //   },
  //   to: {
  //     transform: "translateY(0px)",
  //     opacity: 1,
  //   },
  //   config: {
  //     duration: 1000,
  //   },
  //   delay: 500,
  // });

  return (
    <>
      <footer id="footer">
        <div className={classes.icon_container}>
          <a href="#">
            <FacebookIcon className={classes.icon} style={iconStyle}>
              Facebook
            </FacebookIcon>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-alam-73516425a/"
            target="_blank"
          >
            <LinkedInIcon className={classes.icon} style={iconStyle}>
              LinkedIn
            </LinkedInIcon>
          </a>
          <a href="#">
            <TwitterIcon className={classes.icon} style={iconStyle}>
              Twitter
            </TwitterIcon>
          </a>
          <a
            href="https://github.com/ambervector?tab=repositories"
            target="_blank"
          >
            <GitHubIcon className={classes.icon} style={iconStyle}>
              GitHub
            </GitHubIcon>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
