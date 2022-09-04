import React from "react";
import { WorkMehtodArrow } from "../../assets";

const HandleProject = (props) => {
  const { className, phaseTitle1, phaseTitle2, phaseDetail } = props;

  return (
    <div className="project-cycle-parent">
      <div className={`project-cycle-img cycle-img ${className}`}></div>
      <div className="project-cycle-heading text-center">
        <p>{phaseTitle1}</p>
        <p>{phaseTitle2}</p>
      </div>
      <p className="project-cycle-para text-center">{phaseDetail}</p>
      <img src={WorkMehtodArrow.src} className="project-cycle-arrow" alt="" />
    </div>
  );
};

export default HandleProject;
