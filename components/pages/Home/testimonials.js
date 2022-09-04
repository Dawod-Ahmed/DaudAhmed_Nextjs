import React, { useState } from "react";
import {
  ReviewImage1,
  ReviewImage2,
  ReviewImage3,
  ReviewImage4,
  ReviewImage5,
  ReviewImage6,
  FullFillStar,
  HalfFillStar70,
  CommaTop,
  CommaDown,
} from "../../../assets";
import { TestimonialComp } from "../../common";


const Testimonials = () => {
  const [testimonialData] = useState([
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage1,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage2,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage3,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage4,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage5,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
    {
      rewiewStar: 5,
      rewiewDetail:
        "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex eveniet earum maxime a amet magnam dolor autem id, ea aut aspernatur eius dolorum omnis dicta molestias dolores quae itaque.",
      personImage: ReviewImage6,
      personName: "Jhon Smith",
      personCompany: " Manager of Al Udan Office Services",
    },
  ]);

  return (
    <>
      <section className="testimonials-section">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner ">
            {testimonialData.map((value, index) => {
              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""} `}
                  key={index}
                >
                  <TestimonialComp
                    personImage={value.personImage}
                    commaTop={CommaTop}
                    fullStar={FullFillStar}
                    halfStart70={HalfFillStar70}
                    rewiewStarValue={value.rewiewStar}
                    rewiewDetail={value.rewiewDetail}
                    personName={value.personName}
                    personCompany={value.personCompany}
                    commaBottom={CommaDown}
                  />
                </div>
              );
            })}
          </div>
          <div className="scroll-events-parent">
            <div className="d-flex justify-content-around w-100">
              <button
                className="carousel-control-prev  h-auto carousel-control-btn position-static"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next  h-auto carousel-control-btn position-static"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon "
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="carousel-indicators mt-3">
              <button
                className="carosalBtn active"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                // className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                className="carosalBtn"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
