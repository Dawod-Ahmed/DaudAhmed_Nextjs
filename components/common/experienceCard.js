import React from "react";

const ExperienceCard = (props) => {
  const { title, location, detail, duration } = props;
  return (
    <>
      <div className="experience-card p-4 mb-5 d-flex flex-column justify-content-start ">
        <div className="d-flex flex-column flex-sm-row  align-items-center justify-content-sm-between">
          <div className="department-location"> {title} </div>

          <span className="duration">
            <span className="duration-dot">● </span>
            {location}
          </span>
        </div>
        <div className="department-title pb-2">{detail}</div>

        <p className="experience-detail mb-0">{duration}</p>
      </div>
    </>
  );
};

export default ExperienceCard;
