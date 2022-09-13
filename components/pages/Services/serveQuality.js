import {
  reactJs,
  gatsbyjs,
  next,
  portfolioDownArrow,
  SelfServicesImage,
} from "../../../assets/";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import Image from "next/image";

const ServeQuality = () => {
  return (
    <>
      <section className="serve-qulaity-section">
        <div className="serve-quality-left-part mb-5">
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
              <div className="self-services-image">
                <Image
                  src={SelfServicesImage.src}
                  alt="img"
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={SelfServicesImage.src}
                />
              </div>
              <div className="serve-quality-icons-parent">
                <div className="s-skill-icon s-next-icon">
                  <Image
                    src={next.src}
                    alt="Next js"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={next.src}
                  />
                </div>
                <div className="s-skill-icon s-react-icon">
                  <Image
                    src={reactJs.src}
                    alt="React js"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={reactJs.src}
                  />
                </div>
                <div className="s-skill-icon s-gatsby-icon">
                  <Image
                    src={gatsbyjs.src}
                    alt="GAtsby js"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={gatsbyjs.src}
                  />
                </div>
              </div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>

        <div className="serve-quality-part-parent ">
          <h1 className="heading my-5">
            <span className="heading-first">Serve Quality &</span>
            <br />
            <span className="heading-second">Value</span>
          </h1>
          <p className="general-text serve-quality-para">
            I complete the project with client satisfaction and always try my
            best to fulfill the client requirement priorities and provide
            excellent services of mine to my client.
          </p>
          <img
            src={portfolioDownArrow.src}
            alt=""
            className="s-down-arrow scroll-down-arrow-img"
          />
        </div>
      </section>
    </>
  );
};

export default ServeQuality;
