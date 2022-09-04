import React from "react";
import {
  HeroSection,
  HomeCardsSection,
  ShortIntroSection,
  TestimonialsSection,
} from "../components/pages/Home";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Dawood Ahmed</title>
      </Head>
      <main className="w-100 d-flex-direction  ">
        <HeroSection />
        <ShortIntroSection />
        <HomeCardsSection />
        <TestimonialsSection />
      </main>
    </>
  );
};

export default Home;
