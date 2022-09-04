import Head from "next/head";
import React from "react";
import {
  Freelancing,
  OfferServices,
  ServeQuality,
  WorkMethod,
} from "../components/pages/Services";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services | Dawood Ahmed</title>
      </Head>
      <main className="d-flex-direction pb-0 w-100">
        <ServeQuality />
        <OfferServices />
        <WorkMethod />
        <Freelancing />
      </main>
    </>
  );
};

export default Services;
