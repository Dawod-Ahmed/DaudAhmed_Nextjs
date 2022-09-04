import React, { useEffect, useState } from "react";
import { DaudImg, homeSrcolldownButton } from "../../../assets";
import Link from "next/link";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const HeroSection = () => {
  const [hideWelcome, setHideWelcome] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setHideWelcome("d-none");
    }, 6000);
    setInterval(() => {
      clearInterval(interval);
    }, 6000);
  }, []);

  return (
    <>
    
      <section className="hero-section d-flex justify-content-center ">
        <div className="hero-two-parts-parent w-100 ">
          <div className="left-content-part ">
            <span className={`welcome-txt ${hideWelcome}`}>Welcome</span>
            <h1 className="dev-name">
              <span className="heading-first">I'm Dawood Ahmed,</span>
              <br />
              <span className="heading-second position-relative hero-text-parent">
                A&nbsp;
                <span className="hero-text hero-text1 heading-second ">
                  Web Developer
                </span>
                <span className="hero-text hero-text2 heading-second ">
                  UI/UX Designer
                </span>
                <span className="hero-text hero-text3 heading-second ">
                  Freelancer
                </span>
              </span>
            </h1>
            <p className="dev-intro-txt general-text  mt-2 mb-5">
              I am a passionate full-stack web developer and web designer.
              Please Take a look at my unique and recent projects!
            </p>
            <div className="btns-group border-0" aria-label="Basic example ">
              <Link href="./projects" type="button">
                <a className="btn btn-project">Projects</a>
              </Link>
            </div>
          </div>
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
              <div className="right-img-part img-background">
                <img src={DaudImg.src} alt="img" className="dev-img w-100 h-100" />
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="scroll-down-element">
          <span className="hero-scroll-first-line">
            Want to know more about me?{" "}
          </span>
          <span className="hero-scroll-second-line">Scroll Down</span>
          <img
            src={homeSrcolldownButton.src}
            alt="img"
            className="hero-scroll-down-img scroll-down-arrow-img"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
/*
 */
