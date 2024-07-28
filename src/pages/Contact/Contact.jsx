import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import classes from "./Contact.module.css";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const mailIconStyle = { color: "red", fontSize: "3rem" };

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
          x: 100,
          y: 100,
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
        <h2>Contact</h2>
        <p className={` ${classes.translateY10}`}>
          I am seeking out opportunities to work with companies / individuals /
          agencies to bring my collective experience to the table. I want to use
          my acquired skills to solve real business-problems in a way that
          optimizes everyone's experience and knowledge.
        </p>
        <div className={classes.contact_details}>
          <p>Feel free to reach out through any of the platforms below:</p>

          <address>
            <div className={classes.details}>
              <MdOutlineMailOutline style={mailIconStyle} />
              <a href="mailto: amberalam.3101@gmail.com">
                amberalam.3101@gmail.com
              </a>
            </div>
            <br />

            <div className={classes.details}>
              <MdLocationPin style={mailIconStyle} />
              <p>Bengaluru</p>
            </div>
          </address>
        </div>
      </Box>
    </>
  );
};

export default Contact;
