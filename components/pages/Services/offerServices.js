import React from "react";
import Link from "next/link";
import { CardComponent } from "../../common";
const OfferServices = () => {
  return (
    <>
      <section className="offer-servcies-section flex-column flex-xl-row">
        <div className="offer-servcies-left-part pb-5 mb-5 pb-xl-0 mb-xl-0">
          <h1 className="heading my-5">
            <span className="heading-first">My Awesome</span>
            <br />
            <span className="heading-second">Services</span>
          </h1>
          <p className="general-text serve-quality-para">
            I Unleash the power of custom, reliable, super-fast, and responsive
            web development services to deliver an interactive and immersive
            user interface and user experience to your web visitor.
          </p>
          <Link href="/contact">
            <a className="btn">Contact Me</a>
          </Link>
        </div>
        <div className="services-carsds-parent">
          <CardComponent
            className="services-card  cards-parent   d-flex flex-column justify-content-start  align-items-center my-5 my-lg-3  mx-sm-5 mx-lg-4"
            cardImageClassname="bugs-fixer-img"
            title="Bugs"
            title1="Fixing"
            para="I design the modern, Unique Web UI/UX design with consumable content to engage the website visitor for your business."
            projects="20"
          />
          <CardComponent
            className="services-card  cards-parent   d-flex flex-column justify-content-start  align-items-center my-5 my-lg-3  mx-sm-5 mx-lg-4"
            cardImageClassname="ui-ux-design-img"
            title="UI/UX"
            title1="Design"
            para="I develop the maintainable, responsive, bug-free, and pixel-perfect front-end of the website and & web application."
            projects="20"
          />
          <CardComponent
            className="services-card  cards-parent   d-flex flex-column justify-content-start  align-items-center my-5 my-lg-3  mx-sm-5 mx-lg-4"
            cardImageClassname="front-end-design-img"
            title="Front-End"
            title1="Development"
            para="I build a complete web application solution with the latest & innovative technologies to maintain the performance of web applications."
            projects="20"
          />
          <CardComponent
            className="services-card  cards-parent   d-flex flex-column justify-content-start  align-items-center my-5 my-lg-3  mx-sm-5 mx-lg-4"
            cardImageClassname="full-stack-design-img"
            title="Full-Stack"
            title1="Development"
            para="Being an experiennced web developer, I also fix existing website and web application bugs/errors,its does not matter bug is normal or complex."
            projects="20"
          />
        </div>
      </section>
    </>
  );
};

export default OfferServices;
