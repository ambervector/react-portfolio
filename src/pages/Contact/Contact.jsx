import React from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import classes from "./Contact.module.css";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";

const mailIconStyle = { color: "red", fontSize: "3rem" };

const Contact = () => {
  return (
    <>
      <PageHeading heading="Let's make something great together!" />
      <div className={classes.contact_text}>
        <h2>Contact</h2>
        <p>
          I am seeking out opportunities to work with companies / individuals /
          agencies to bring my collective experience to the table. I want to use
          my acquired skills to solve real business-problems in a way that
          optimizes everyone's experience and knowledge.
        </p>
        <p></p>
      </div>
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
    </>
  );
};

export default Contact;
