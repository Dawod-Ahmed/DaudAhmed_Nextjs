import Image from "next/image";
import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import {
  AboutBackImg,
  AboutDaud,
  AboutImageShadow,
  AboutDaudUpdated,
} from "../../../assets";

const AboutMeSection = () => {
  return (
    <>
      <section className="about-me-section d-flex flex-column flex-lg-row align-items-center justify-content-between ali position-relative py-5">
        <img
          src={AboutBackImg.src}
          alt="img"
          className="position-absolute aboutme-background-text mx-auto"
        />
        <div className="aboutLandingSec">
          <div className="about-left-part-updated">
            <MouseParallaxContainer
              className="parallax"
              containerStyles={{
                width: "100%",
                overflow: "visible",
                gridTemplateColumns: "auto auto auto auto auto",
              }}
              resetOnLeave
            >
              <MouseParallaxChild
                factorX={0.06}
                factorY={0.06}
                updateStyles={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  height: "100%",
                }}
              >
                <div className="position-relative aboutSelfImage">
                  <Image
                    src={AboutDaudUpdated}
                    alt="Day Ahmed"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="left top"
                  />
                </div>
              </MouseParallaxChild>
            </MouseParallaxContainer>
          </div>
          <div className="about-right-part-updated w-100">
            <h1 className="about-heading">
              <span className=" heading-first">About</span>
              <span className=" heading-second"> me</span>
            </h1>
            <p className="about-para general-text">
              I started my software development journey at the start of 2018.
              During this period, I spent massive time on web development and
              its almost all related technologies and primarily in real-time
              industry work experience to learn and develop web development
              projects. I like to create a modern, fully responsive, clean UI
              interface, maintainable code, and bugs-free website and web
              application.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;
