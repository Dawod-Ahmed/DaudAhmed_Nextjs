import {
  reactJs,
  gatsbyjs,
  next,
  portfolioDownArrow,
  SelfServicesImage,
} from "../../../assets/";
import animationData from "../../../assets/LottieFiles/Servicespage.json";
import Animation from "../../common/animation";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const ServeQuality = () => {
  return (
    <>
      <section className="serve-qulaity-section">
        <div className="serve-quality-left-part mb-5">
          {/* <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
              }}
            >
              <Animation src={animationData} />
            </div>
          </div> */}
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
              <img
                src={SelfServicesImage.src}
                alt="img"
                className="self-services-image"
              />
              <div className="serve-quality-icons-parent">
                <img src={next.src} alt="" className="s-skill-icon s-next-icon" />
                <img
                  src={reactJs.src}
                  alt=""
                  className="s-skill-icon s-react-icon"
                />
                <img
                  src={gatsbyjs.src}
                  alt=""
                  className="s-skill-icon s-gatsby-icon"
                />
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
