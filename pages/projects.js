import Head from "next/head";
import { PortfolioHeading, ProjectSection } from "../components/pages/Projects";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Dawood Ahmed</title>
      </Head>
      <main className="w-100 d-flex-direction pd-0 pt-0 ">
        <PortfolioHeading />
        <ProjectSection />
      </main>
    </>
  );
};

export default Projects;
