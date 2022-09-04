import {CardComponent} from "../../common";
const HomeCardSection = () => {
  return (
    <>
      <section className="w-100 cards-section ">
        <div className="main-cards-parent d-flex flex-column flex-md-row align-items-center justify-content-center">
          <CardComponent
            className="ui-ux-design home-cards-parent cards-parent  position-relative d-flex flex-column justify-content-start  align-items-center my-5 my-xl-3  mx-sm-5 mx-md-4 mx-lg-4 my-xl-3"
            cardImageClassname="ui-ux-design-img"
            title="UI/UX"
            title1="Design"
            para="I design the modern, Unique Web UI/UX design with consumable content to engage the website visitor for your business."
            projects="20"
          />
          <CardComponent
            className="front-end-design home-cards-parent cards-parent  position-relative d-flex flex-column justify-content-start  align-items-center my-5 my-xl-3  mx-sm-5 mx-md-4 mx-lg-4 my-xl-3"
            cardImageClassname="front-end-design-img"
            title="Front-End"
            title1="Development"
            para="I develop the maintainable, responsive, bug-free, and pixel-perfect front-end of the website and & web application."
            projects="20"
          />
          <CardComponent
            className="full-stack-design home-cards-parent cards-parent  position-relative d-flex flex-column justify-content-start  align-items-center my-5 my-xl-3  mx-sm-5 mx-md-4 mx-lg-4 my-xl-3"
            cardImageClassname="full-stack-design-img"
            title="Full-Stack"
            title1="Development "
            para="I build a complete web application solution with the latest & innovative technologies to maintain the performance of web applications."
            projects="20"
          />
        </div>
      </section>
    </>
  );
};

export default HomeCardSection;
