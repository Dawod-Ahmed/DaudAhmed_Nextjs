import Image from "next/image";
const TestimonialComp = (props) => {
  const {
    personImage,
    commaTop,
    fullStar,
    rewiewStarValue,
    rewiewDetail,
    personName,
    personCompany,
    commaBottom,
  } = props;
  return (
    <>
      <div className="testimonial-image d-block w-100 mx-auto mx-sm-0 position-realtive">
        <Image src={personImage.src} layout="fill" />
      </div>
      {/* <img
        src={}
        className="testimonial-image d-block w-100 mx-auto mx-sm-0"
        alt="img"
      /> */}
      <div className="carousel-caption d-none d-md-block ">
        <img src={commaTop.src} alt="img" className="comma commaUp" />
        <div className="star-parent d-flex py-3">
          <img src={fullStar.src} alt="img" className="star pr-2" />
          <img src={fullStar.src} alt="img" className="star pr-2" />
          <img src={fullStar.src} alt="img" className="star pr-2" />
          <img src={fullStar.src} alt="img" className="star pr-2" />
          <img src={fullStar.src} alt="img" className="star pr-2" />
          <span className="mx-1 reviewStars">{rewiewStarValue}</span>
        </div>
        <p className="carousel-heading ">{rewiewDetail}</p>
        <p className="carousel-paragraph testimonial-personName mb-0">
          {personName}
        </p>
        <div className="carousel-paragraph">
          {personCompany}
          <img
            src={commaBottom.src}
            alt="img"
            className="mx-3 mt-3 commaDown comma"
          />
        </div>
      </div>
    </>
  );
};

export default TestimonialComp;
