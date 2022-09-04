import React, { useState } from "react";
import {
  xd,
  adobephotoshop,
  bootstrap,
  css,
  gatsbyjs,
  git_Hub,
  html,
  javaScript,
  materialUI,
  next,
  npm,
  reactJs,
  redux,
  sass,
  firebase,
  mongoDb,
  nodejs,
} from "../../../assets";
import { SkillsComponent } from "../../common";
const SkillsSection = () => {
  const [skillsData] = useState([
    {
      image: reactJs,
      className: "reactJs",
      imageName: "React.Js",
      tooltipTitle: "React.Js",
      tooltipDetail:
        "React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.",
    },
    {
      image: gatsbyjs,
      className: "gatsbyjs",
      imageName: "Gatsby.Js",
      tooltipTitle: "Gatsby.Js",
      tooltipDetail:
        "Gatsby is a React-based free and open-source framework that helps developers build blazing-fast websites and applications.",
    },
    {
      image: next,
      className: "next",
      imageName: "Next.Js",
      tooltipTitle: "Next.Js",
      tooltipDetail:
        "NextJS is a js framework built on top of React to help developers with creating performant web applications and superfast static websites.",
    },
    {
      image: redux,
      className: "redux",
      imageName: "Redux",
      tooltipTitle: "Redux",
      tooltipDetail:
        "Redux is a standalone JS library.Redux is used mostly for application state management. ",
    },

    {
      image: html,
      className: "html",
      imageName: "HTML",
      tooltipTitle: "HTML",
      tooltipDetail:
        "HTML is the standard markup language for creating Web pages.We HTML to develop the skeleton of website in web development",
    },
    {
      image: css,
      className: "css",
      imageName: "CSS",
      tooltipTitle: "CSS",
      tooltipDetail:
        "CSS is the style sheet language for describing the presentation and design of web pages including colors, fonts, and layouts.",
    },

    {
      image: sass,
      className: "sass",
      imageName: "Sass",
      tooltipTitle: "Sass",
      tooltipDetail:
        " SCSS (or Sass) offers a way to write styles for websites with more enhanced CSS syntax. ",
    },
    {
      image: javaScript,
      className: "javaScript",
      imageName: "JavaScript",
      tooltipTitle: "JavaScript",
      tooltipDetail:
        "JavaScript is use to build complex interactive websites and browser games, and to connect servers to websites and web applications.",
    },
    {
      image: bootstrap,
      className: "bootstrap",
      imageName: "Bootstrap",
      tooltipTitle: "Bootstrap",
      tooltipDetail:
        "Bootstrap is a potent front-end framework used to create modern websites and web apps.",
    },

    {
      image: materialUI,
      className: "materialUI",
      imageName: "MaterialUI",
      tooltipTitle: "MaterialUI",
      tooltipDetail:
        "Material-UI is a library of components written in React for building user interfaces. Originally developed to unify the React framework",
    },
    {
      image: npm,
      className: "npm",
      imageName: "Npm",
      tooltipTitle: "Npm",
      tooltipDetail:
        "Npm is probably the most popular package manager for JavaScript.",
    },
    {
      image: firebase,
      className: "firebase",
      imageName: "FireBase",
      tooltipTitle: "FireBase",
      tooltipDetail:
        "Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps.",
    },
    {
      image: mongoDb,
      className: "mongodb",
      imageName: "MongoDB",
      tooltipTitle: "MongoDB",
      tooltipDetail:
        "MongoDB is a document-oriented NoSQL database used for high volume data storage.",
    },
    {
      image: nodejs,
      className: "nodejs",
      imageName: "NodeJs",
      tooltipTitle: "NodeJs",
      tooltipDetail:
        "Node.js is a runtime environment that executes JavaScript on the server side.",
    },
    {
      image: git_Hub,
      className: "git_Hub",
      imageName: "Git-hub",
      tooltipTitle: "Git-hub",
      tooltipDetail:
        "GitHub is an online software development platform used for storing, tracking, and collaborating on software projects.",
    },
    {
      image: xd,
      className: "xd",
      imageName: "Adobe Xd",
      tooltipTitle: "Adobe XD",
      tooltipDetail:
        "GitHub is an online software development platform used for storing, tracking, and collaborating on software projects.",
    },
    {
      image: adobephotoshop,
      className: "adobephotoshop",
      imageName: "Photoshop",
      tooltipTitle: "Photoshop",
      tooltipDetail:
        "Adobe Photoshop is an imaging and graphic design software used by thousands of people in many different roles across the world",
    },
  ]);
  return (
    <>
      <section className="skill-section py-5">
        <div className="skills-heading-parent py-5  mb-4 mb-sm-5 ">
          <h1 className="heading text-center">
            <span className="heading-first">My</span>
            <span className="heading-second"> Skills</span>
          </h1>
          <p className="heading-detail text-center">
            I use these technologies to design and develop full custom,
            reliable, blazing-fast, and secure websites and web applications. I
            also use many other tools for web development.
          </p>
        </div>
        <div className="skills-parent p-y row py-3  g-4 g-md-0 ">
          {skillsData.map((value, index) => {
            return (
                <SkillsComponent
                  key={index}
                  KeyIndex={index}
                  className={value.className}
                  image={value.image.src}
                  skillName={value.imageName}
                  tooltipTitle={value.tooltipTitle}
                  tooltipDetail={value.tooltipDetail}
                />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
