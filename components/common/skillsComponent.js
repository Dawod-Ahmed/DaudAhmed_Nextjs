import Image from "next/image";
const SkillsComponent = (props) => {
  const { image, className, skillName, KeyIndex, tooltipTitle, tooltipDetail } =
    props;
  return (
    <>
      <div
        className="skill-img-parent  p-2 p-sm-3 p-md-4  p-xl-5 col-4   col-md-3"
        key={KeyIndex}
      >
        <div className="skills-img-div show-tooltip">
          <div className="bg-gradient-color-hidder "></div>
          <div className="tooltips">
            <h3>{tooltipTitle}</h3>
            <p className="fs-5">{tooltipDetail}</p>
          </div>
          <img
            src={image}
            alt="img"
            className={`${className} skill-img  show-tooltip`}
          />
        </div>
        <div className="skill-name pt-3"> {skillName}</div>
      </div>
    </>
  );
};

export default SkillsComponent;
