import React from "react";
import { portfolioDownArrow } from "../../../assets";

const PortfolioHeading = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="heading-parent">
          <div className="portfolio-heading-parent">
            <div className="heading-parent-child">
              <h1 className="heading px-3 px-sm-0">
                <span className="heading-first">My</span>
                <span className="heading-second"> Portfolio</span>
              </h1>
              <p className="portfolio-heading-detail">
                I use modern technology for develop any custom web soluton to
                stand out!
              </p>
            </div>
            <img
              src={portfolioDownArrow.src}
              alt="img"
              className="scroll-down-arrow-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioHeading;
