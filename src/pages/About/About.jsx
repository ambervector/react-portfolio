import React from "react";
import Box from "@mui/material/Box";
import classes from "./About.module.css";
import PageHeading from "../../components/PageHeading/PageHeading";
import Skills from "../../components/Skills/Skills";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth", // Optional for smooth scrolling
  });

  useGSAP(() => {
    const refEl = gsap.utils.toArray(scrollRef.current.children);
    refEl.forEach((refs) => {
      gsap.to(refs, {
        opacity: 1,
        scrollTrigger: {
          trigger: refs,
          start: "bottom bottom",
          end: "top 30%",
          scrub: true,
          ease: "power1.inOut",
        },
        delay: 0.5,
        duration: 3,
      });
    });
  }, []);
  const aboutHeading = "I love learning new technologies...";

  return (
    <>
      <PageHeading heading={aboutHeading} />
      <Skills />
      <div className="about_me container">
        <h2>About Me</h2>
        <h3>
          Hi, I am Amber. I am a self taught programmer who loves to learn and
          use new technnologies.
        </h3>
        <div className={classes.aboutText} ref={scrollRef}>
          <p>
            I initially started learning HTML, CSS and JavaScript sometime back.
            As I had no degree in this field, I had to depend on Udemy classes
            and Youtube channels for the same. I am from Customer Service
            background. I have about 10 years of experience in that field
            working for some of the most renowned MNCs in the world. I have
            worked for Convergys, Wipro, IBM DAKSH, American Express to name a
            few. I have experience in serving the USA and UK based customers in
            the past. This job helped me to learn communication skills and
            managing people, etc.
          </p>
          <p>
            March, 2020 - Covid-19 took the world by surprise and everyone was
            confined to their homes. I got some time to think about my career
            choices and what profession would I want to go for in my life. I
            wanted to get into a field that is challenging, ever evolving and
            that which gives me something to always look forward to. That is
            when I realized that I should go for the IT field.
          </p>
          <p>
            My journey started then and there. I used Youtube to learn about
            computers and how they work. I also started learning about how to
            design something for the screen. I started using Figma to design
            different UIs. As I kept advancing my knowledge in this domain, I
            kept my pace with HTML, CSS and JavaScriipt as well. I remembered
            that I used to write small programs in GWBasic in school and also
            C++ with the help of my friend while I was in Delhi.
          </p>
          <p>
            I also started learning python to enhance my programming skills. I
            learnt little bit of Django as well but had to stop that because I
            got into an IT company called CallHub. I wanted to go for the role
            of front-end developer but they had opening for Automation QA
            Engineer . So, I decided to go ahead with that role as it required
            coding in python using Pytest-Selenium libraries. I got to automate
            the regression test cases for their products. I also got to learn
            tools like - Jira, GitHub, SauceLab, TestRail, TestProject
            automation tool, etc.
          </p>
          <p>
            I had to part my ways with CallHub as I was interested in front-end
            role to practice my skills on a real project. I learnt and practiced
            ES6, Advanced JS, React JS, Tailwind, Bootstrap, Material UI, etc. I
            also developed my debugging skills using network tab, console log
            and other tools. Currently I am focussing on improving my Back-End
            Developer skills by learning NodeJS, NextJS, ExpressJS, MongoDB,
            Mongoose, etc. My aim in life is to keep learning new technologies
            and keep adding them to my skill kit. So, now I am looking forward
            to working with good companies that can provide me such an
            opportunity.
          </p>
        </div>
      </div>
    </>
  );
};

export default React.memo(About);
