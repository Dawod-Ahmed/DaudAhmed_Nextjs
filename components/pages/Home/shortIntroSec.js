import React from "react";
import Link from "next/link";
const ShortIntroSection = () => {
  return (
    <>
      <section
        className="h-second-sec d-flex flex-column-reverse flex-lg-row justify-content-lg-center align-items-center justify-content-lg-between justify-content-xxl-around position-relative
"
      >
        <div className="h-sec-left-part d-flex flex-column align-items-start justify-content-between">
          <div className="query-txt-parent">
            <div className="query-type-text">
              <p className="problem-solver-txt mt-1 mb-0 d-none d-lg-block">
                {`</>`} PROBLEM SOVER
              </p>{" "}
              <br />
              Any Type Of Query <br />& Discussion.
            </div>
          </div>
          <Link href="./contact" >
            <a className="contact-btn btn mb-3">Faq's & Contact</a>
          </Link>
        </div>
        <div className="h-sec-right-part d-flex flex-column justify-content-between">
          <div className="short-about-para">
            <p className="problem-solver-txt mt-1 mb-0 d-lg-none">
              {`</>`} PROBLEM SOVER
            </p>
            I Know only engaging website returns online business, for this I am
            developing reliable, responsive and custom problem solving web
            solutions to grow your business potential online!
          </div>
          <div className="experience-parent d-flex flex-column flex-sm-row justify-content-between ">
            <div className="exp1  d-flex justify-content-center justify-content-sm-between align-items-center pb-5 pb-sm-0">
              <span className="exp-digit">2.5+</span>
              <span className="exp-txt">
                Years n <br />
                Web Development.
              </span>
            </div>
            <div className="exp2 d-flex justify-content-center justify-content-sm-between align-items-center pb-5 pb-sm-0 ">
              <span className="exp-digit">5+</span>
              <span className="exp-txt">
                Years In
                <br />
                Software Development.
              </span>
            </div>
          </div>
        </div>
        <div className="background-text position-absolute home-background-text">
          Experiance
        </div>
      </section>
    </>
  );
};

export default ShortIntroSection;
