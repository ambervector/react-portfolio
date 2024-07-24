import React from "react";
import classes from "./HtmlProjects.module.css";
import ProjectItem from "../ProjectItem/ProjectItem";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const htmlProjects = [
  {
    id: 0,
    title: "JS Portfolio Website",
    project_link: "https://amber-portfolio.netlify.app/index.html",
    github_link: "https://github.com/ambervector/my-portfolio",
    description:
      "This project demostrates my HTML, CSS and JavaScript skills. I have used advanced css for showing different type of animations. I have also used hover effects very skillfully. I used keyframes, animation, transform, transition for all these effects. I used Intersection Observer API for fade-in effect on different pages.",
  },
  {
    id: 1,
    title: "Bank Landing Page",
    project_link: "https://bank-landing-page-app.netlify.app/",
    github_link: "https://github.com/ambervector/bank-landing-app",
    description:
      "This project demostrates the landing page for a bank. It has a Nav section with list items, logo and an open account link. A modal opens up when you click the open account link. This also has smooth scroll, lazy loading, tabbed components, slider, etc.",
  },
  {
    id: 2,
    title: "Affiliate Website",
    project_link: "https://affiliate-electronic-website.netlify.app/index.html",
    github_link: "https://github.com/ambervector/affiliate-electronics-website",
    description:
      "This was my very first project. I used pure HTML and CSS to design and render this. It uses navbar, different hover effect, basic html, sidebar, footer, etc. Clicking on different links takes you to different pages as well.",
  },

  {
    id: 3,
    title: "Bootstrap Website",
    project_link: "https://js-bootstrap-practice-project.netlify.app/",
    github_link: "https://github.com/ambervector/bootstrap-practice",
    description:
      "This was my bootstrap practice project. I used a mix of HTML, CSS and Bootstrap to render this. It uses Navbar, hero section, slider, cards, etc. Bootstrap is very useful in situations where someone wants to design and render quickly.",
  },

  {
    id: 4,
    title: "Pig Dice Game",
    project_link: "https://js-pig-dice-game-project.netlify.app/",
    github_link: "https://github.com/ambervector/pig-dice-game",
    description:
      "This is a simple JS game project. I used a mix of HTML, CSS and Javascript to render this. The hold button holds the chance to allow the other player to start playing and accumulating points.",
  },

  {
    id: 5,
    title: "Guess My Number",
    project_link: "https://js-guess-my-number-project.netlify.app/",
    github_link: "https://github.com/ambervector/guess_my_number",
    description:
      "This is another JS game project. I makes use of JS DOM manipulation and event handlers. As soon as the page loads, a secret number is randomly chosen. The player gets chances to guess the number correctly and get a highscore when the player guesses correctly in the minimum number of attempts.",
  },

  {
    id: 6,
    title: "Bank Transactions",
    project_link: "https://bank-app-project.netlify.app/",
    github_link: "https://github.com/ambervector/bank-app",
    description:
      "This is banking project where there are multiple users and they get to see the details of their account once logged in successfully. It uses different JS concepts like list manipulation, adding newly created elements to the screen, making transactions and requesting loan, etc.",
  },

  {
    id: 7,
    title: "Analog Clock",
    project_link: "https://js-analog-clock-project.netlify.app/",
    github_link: "https://github.com/ambervector/digital-clock",
    description:
      "This is an analog clock created using simple JS datetime module. It uses the asynchronous JS TimeInterval function. It also uses the Neumorphism design style to render the clock in a beautiful way on the screen.",
  },
];

const HtmlProjects = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const refEl = gsap.utils.toArray(scrollRef.current.children);
    refEl.forEach((refs) => {
      gsap.fromTo(
        refs,
        {
          opacity: 0,
          x: -100,
          y: 100,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
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
      <div className={classes.container}>
        <h2>HTML, CSS and JS Projects</h2>
        <Box ref={scrollRef}>
          {htmlProjects.map((project) => (
            <ProjectItem
              title={project.title}
              description={project.description}
              project_link={project.project_link}
              github_link={project.github_link}
            />
          ))}
        </Box>
      </div>
    </>
  );
};

export default HtmlProjects;
export { htmlProjects };
