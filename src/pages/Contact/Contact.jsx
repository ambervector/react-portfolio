import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import classes from "./Contact.module.css";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Box, Typography } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const mailIconStyle = { color: "red", fontSize: "2rem" };

const Contact = () => {
  const scrollRef = useRef();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });

  useGSAP(() => {
    const refEl = gsap.utils.toArray(scrollRef.current.children);
    refEl.forEach((refs) => {
      gsap.fromTo(
        refs,
        {
          opacity: 0,
          x: 50,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          scrollTrigger: {
            trigger: refs,
            start: "bottom bottom",
            end: "top 30%",
            scrub: true,
            ease: "power1.inOut",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <PageHeading heading="Let's make something great together!" />
      <Box className={classes.contact_text} ref={scrollRef}>
        <Typography
          variant="h2"
          sx={{ margin: "4rem auto", fontWeight: "900", fontSize: "8rem" }}
        >
          Contact
        </Typography>
        <p className={` ${classes.translateY10}`}>
          I am seeking out opportunities to work with companies / individuals /
          agencies to bring my collective experience to the table. I want to use
          my acquired skills to solve real business-problems in a way that
          optimizes everyone's experience and knowledge.
        </p>
        <Box className={classes.contact_details}>
          <p
            style={{
              marginBottom: "2rem",
            }}
          >
            Feel free to reach out through any of the platforms below:
          </p>
          <address>
            <Box className={classes.details}>
              <MdOutlineMailOutline style={mailIconStyle} />
              <a href="mailto: amberalam.3101@gmail.com">
                amberalam.3101@gmail.com
              </a>
            </Box>
            <br />

            <Box className={classes.details}>
              <MdLocationPin style={mailIconStyle} />
              <p>Bengaluru</p>
            </Box>
          </address>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
