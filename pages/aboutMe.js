import Head from "next/head";
import React from "react";
import { AboutMeSection, ExperienceSection, SkillsSection } from "../components/pages/AboutMe";

const aboutMe = () => {
  return (
    <>
      <Head>
        <title>About | Dawood Ahmed</title>
      </Head>
      <main className="w-100 d-flex-direction about-main pt-0">
        <AboutMeSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </>
  );
};

export default aboutMe;
